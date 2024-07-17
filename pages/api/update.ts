import type { NextApiRequest, NextApiResponse } from 'next'
import * as nacl from "tweetnacl"

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  console.log('recieved', req.method, req.body)

  if (!isVerified(req)) {
    return res.status(401).end("invalid request signature");
  }

  if (req.method === 'POST') {
    if (req.body["type"] === 1) {
      res.status(200).json({ type: 1 })
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

  console.log(req.headers)

  const signature = req.headers["x-signature-ed25519"] as string;
  const timestamp = req.headers["x-signature-timestamp"] as string;

  console.log({ signature, timestamp })

  if (!signature || !timestamp) return false;

  const rawBody = JSON.stringify(req.body);

  const isVerified = nacl.sign.detached.verify(
    Buffer.from(timestamp + rawBody),
    Buffer.from(signature, "hex"),
    Buffer.from(PUBLIC_KEY, "hex")
  );

  console.log('verified')

  return isVerified
}


