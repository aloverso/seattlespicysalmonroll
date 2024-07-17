import type { NextApiRequest, NextApiResponse } from 'next'
import { getStore } from "@netlify/blobs";


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const updatesStore = getStore("updatesStore");

  try {
    const updates = await updatesStore.get("updates", { type: "json" })
    res.status(200).json(updates)
  }
  catch(e) {
    console.log(e)
    res.status(200).json({ message: 'failed ' + e })
  }
}
