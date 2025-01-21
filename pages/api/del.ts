import type { NextApiRequest, NextApiResponse } from "next";
import { getStore } from "@netlify/blobs";
import { UpdateMessage } from "../../src/domain/types";
import dayjs from "dayjs";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log(req.headers);
  if (req.headers["user-agent"]?.includes("Discordbot")) {
    res.status(200).json({ message: `discord agent detected, visit in a browser to delete` });
    return;
  }

  const id = req.query.id;
  const updatesStore = getStore("updatesStore");
  const updates: UpdateMessage[] = await updatesStore.get("updates", { type: "json" });
  const found = updates.find((it) => it.id === id);
  if (!found) {
    res.status(200).json({ message: "message not found" });
    return;
  }
  if (dayjs(found.timestamp).isBefore(dayjs().subtract(5, "minutes"))) {
    res.status(200).json({ message: "message outside of deletion window" });
    return;
  }

  const newBlob = updates.filter((it) => it.id !== id);

  try {
    await updatesStore.setJSON("updates", newBlob);
    res.status(200).json({ message: `deleted this message: ${found.message}` });
  } catch (e) {
    console.log(e);
  }
}
