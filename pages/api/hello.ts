import type { NextApiRequest, NextApiResponse } from 'next'
import { getStore } from "@netlify/blobs";

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const updatesStore = getStore("updatesStore");

  try {
    const entry1 = await updatesStore.get("updates")
    res.status(200).json({ message: entry1 })
  }
  catch(e) {
    console.log(e)
    res.status(200).json({ message: 'failed ' + e })
  }

  try {
    await updatesStore.setJSON("updates", []);
  }
  catch(e) {
    console.log(e)
    res.status(200).json({ message: 'failed ' + e })
  }
}
