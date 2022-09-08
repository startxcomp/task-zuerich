import { NextPage } from 'next'
import React from 'react'
import { ChatContent } from '..';
import Answer from './answer'
import ChatBubble from './chatBubble'

export interface ChatBoxBodyProps {
    chats: ChatContent[];
    selectChoice: any;
}

const ChatBoxBody: NextPage<ChatBoxBodyProps> = (props: ChatBoxBodyProps) => {

    return (
        <div className='flex flex-col gap-2'>
            {
                props.chats.map((chat, index) => (
                    <div key={index} className='flex flex-col gap-2'>
                        {
                            chat.isShown && <>
                                <ChatBubble content={chat.question} poccessor='bot' />
                                <Answer selectChoice={props.selectChoice} choices={chat.answerInfo.map(info => info.text)} chatId={chat.id} />
                                {chat.isAnswered && <ChatBubble content={chat.answerInfo[chat.answer].text} poccessor='human' />}
                            </>
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default ChatBoxBody