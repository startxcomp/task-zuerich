import { NextPage } from 'next'
import React from 'react'

export interface ChatBubbleProps {
  poccessor: 'human' | 'bot';
  content: string;
}

const ChatBubble: NextPage<ChatBubbleProps> = (props: ChatBubbleProps) => {
  return (
    <div className={`flex ${props.poccessor === 'human' ? "justify-end" : "justify-start"} w-auto`}>
      <div className={`${props.poccessor === 'human' ? "bg-[#ff5a64] text" : "bg-[#ffced1]"} relative text-center px-4 py-2 rounded-[10px]`}>
        {props.content}
      </div>
    </div>

  )
}

export default ChatBubble