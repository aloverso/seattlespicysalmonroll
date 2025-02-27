import type { NextApiRequest, NextApiResponse } from "next";
import { getStore } from "@netlify/blobs";

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const updatesStore = getStore("updatesStore");

  try {
    await updatesStore.setJSON("updates", []);
    res.status(200).json({ message: "cleared the store" });
  } catch (e) {
    console.log(e);
  }
}
