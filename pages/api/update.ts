import type { NextApiRequest, NextApiResponse } from 'next'
import * as nacl from "tweetnacl"
import { getStore } from "@netlify/blobs";
import dayjs from "dayjs";
import { UpdateMessage } from "../../src/domain/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  console.log('recieved', req.method, req.body)

  if (!isVerified(req)) {
    return res.status(401).end("invalid request signature");
  }

  if (req.method === 'POST') {
    if (req.body["type"] === 1) {
      res.status(200).json({ type: 1 })
    }
    else if (req.body["type"] === 2) {
      const updateMessage = req.body.data.options[0].value
      const randInt = Math.floor(Math.random()*100000000).toString()
      const newUpdate: UpdateMessage = {
        message: updateMessage,
        timestamp: dayjs().format(),
        id: randInt
      }

      const updatesStore = getStore("updatesStore");
      const updatesBlob = await updatesStore.get("updates", { type: "json"});
      const newBlob = [newUpdate, ...updatesBlob]
      await updatesStore.setJSON("updates", newBlob);

      res.status(200).json({
        "type": 4,
        "data": {
          "tts": false,
          "content": `Sent this message: "${updateMessage}" - Your message ID is: ${randInt}. To delete this message, visit https://seattlespicysalmonroll.com/api/del?id=${randInt}`,
          "embeds": [],
          "allowed_mentions": { "parse": [] }
        }
      })
    }
    else {
      res.status(200).json({ message: "nothing here yet - post" })
    }
  } else {
      res.status(200).json({ message: "nothing here yet - other methods" })
  }
}

const isVerified = (req: NextApiRequest): boolean => {
  const PUBLIC_KEY = "37f4b808785ce0f2a558e5717c952f430ddf1bbac2fa85319952d7b4effa6ca3";

  const signature = req.headers["x-signature-ed25519"] as string;
  const timestamp = req.headers["x-signature-timestamp"] as string;

  if (!signature || !timestamp) return false;

  const rawBody = JSON.stringify(req.body);

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + rawBody),
    Buffer.from(signature, "hex"),
    Buffer.from(PUBLIC_KEY, "hex")
  );

  return isVerified
}


