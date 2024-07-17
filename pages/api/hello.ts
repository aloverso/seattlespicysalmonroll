import type { NextApiRequest, NextApiResponse } from 'next'
import { getStore } from "@netlify/blobs";

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const construction = getStore("construction");

  try {
    await construction.setJSON("nails", { type: "common", finish: "bright" });
  }
  catch(e) {
    console.log(e)
    res.status(200).json({ message: 'failed ' + e })
  }

  try {
    const entry1 = await construction.get("nails")
    res.status(200).json({ message: entry1 })
  }
  catch(e) {
    console.log(e)
    res.status(200).json({ message: 'failed ' + e })
  }
}
