import { Chat, chats } from "../../../data/index";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { chat_id } = req.query;
  if (chat_id) {
    const result = chats.find((chat) => chat.id === parseInt(chat_id as string))
    if (result) 
      res.status(200).json(result);
    else 
      res.status(304).json(null)
  }
}
