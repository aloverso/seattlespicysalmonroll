import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log('recieved', req.method, req.body)
  res.status(200).json({ message: 'Hello from Next.js!' })
}
