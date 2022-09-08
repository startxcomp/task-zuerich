import { NextPage } from 'next'
import React from 'react'
import SendIcon from '@material-ui/icons/Send'

const ChatBoxFooter: NextPage = () => {
  return (
    <div className='flex items-center'>
        <input type='text' className='h-[45px] w-full border-orange-600 border-[1px] focus:border-orange-300 p-2' />
        <button className='bg-orange-600 p-4 hover:bg-orange-300 text-white h-[45px] w-[45px] flex justify-center items-center'><SendIcon /></button>
    </div>
  )
}

export default ChatBoxFooter