import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ChatBoxBody from './body'
import ChatBoxFooter from './footer'
import ChatBoxHeader from './header'
import { ValueOption } from '../../data'

export interface ChatBoxProps {
    openChatBox: any;
}

export interface ChatContent {
    id: number;
    title: string;
    question: string;
    answerInfo: ValueOption[];
    answer: number;
    isAnswered: boolean;
    isShown: boolean;
}

const ChatBox: NextPage<ChatBoxProps> = (props: ChatBoxProps) => {
    const [expand, setExpand] = useState(false)
    const [chatContents, setChatContents] = useState<ChatContent[]>([]);
    const [nextId, setNextId] = useState<number | boolean>(200)

    const getChat = (answerIndex: number) => {
        if (typeof nextId === 'number') {
            axios.get('http://localhost:3000/api/getchat/' + nextId).then(res => {
                if (res.status === 200) {
                    setChatContents(prevState => [
                        ...prevState,
                        {
                            id: res.data.id,
                            title: res.data.name,
                            question: res.data.text,
                            answer: answerIndex,
                            answerInfo: res.data.valueOptions,
                            isAnswered: false,
                            isShown: true,
                        }
                    ])
                    setNextId(res.data.valueOptions[answerIndex].nextId)
                } else if (res.status === 304) {
                    
                }
            })
        } else {
            end()
        }
    }

    const Answer = (chatId: number, answerIndex: number): void => {
        setChatContents(prevState => prevState.map(chatContent => {
            if (chatContent.id === chatId) {
                return {...chatContent, isAnswered: true, answer: answerIndex}
            }
            return chatContent
        }))
        getChat(answerIndex)
    }

    const end = () => {
        setChatContents(prevState => [
            ...prevState, {
                id: -1,
                title: '',
                question: 'Vielen Dank! Ein Kollege aus unserem Team wird sich demnächst bei Ihnen melden.',
                answer: 1,
                answerInfo: [],
                isAnswered: false,
                isShown: true
            }
        ])
    }

    useEffect(() => {
        getChat(0)
    }, [])

    return (
        <div className={`${expand ? "w-[600px] h-[80%]" : "w-[400px] h-[600px]"} flex flex-col p-3 z-10 fixed bottom-[70px] right-[110px] bg-[#eeeae4] justify-between`}>
            <div className='h-[50px]'>
                <ChatBoxHeader closeChatBox={props.openChatBox} expandChatBox={() => { setExpand(expand => !expand) }} />
            </div>
            <div className='h-full overflow-y-auto'>
                <ChatBoxBody chats={chatContents} selectChoice={Answer} />
            </div>
            <div className='h-[50px]'>
                <ChatBoxFooter />
            </div>

        </div>
    )
}

export default ChatBox