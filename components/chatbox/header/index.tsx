import { NextPage } from 'next'
import React from 'react'
import ClearIcon from '@material-ui/icons/Clear'
import OpenWithIcon from '@material-ui/icons/OpenWith'
import Image from 'next/image';

export interface ChatBoxHeaderProps {
    closeChatBox: (status: boolean) => void;
    expandChatBox: () => void;
}

const ChatBoxHeader: NextPage<ChatBoxHeaderProps> = (props: ChatBoxHeaderProps) => {
    return (
        <div className='flex justify-between'>
            <div className='hover:cursor-pointer' onClick={() => props.closeChatBox(false)}>
                <ClearIcon />
            </div>
            <div className='hover:cursor-pointer' onClick={props.expandChatBox}>
                <Image layout='fixed' width={20} height={20} src='/images/expand.png' />
            </div>
        </div>
    )
}

export default ChatBoxHeader