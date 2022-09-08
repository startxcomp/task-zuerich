import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ChatBox from '../components/chatbox'
import ChatBubble from '../components/chatbox/body/chatBubble'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [open, setOpen] = useState(false)
  const [welcomeChatShow, setWelcomeChatShow] = useState(true)

  useEffect(() => {
    setWelcomeChatShow(!open)
  }, [open])

  const start = () => {
    setOpen(open => !open)
    setWelcomeChatShow(welcomeChatShow => !welcomeChatShow)
  }

  return (
    <div className='relative'>
      <div className='fixed bottom-[40px] right-[40px]' onClick={start}>
        <Image width={50} height={50} layout="fixed" src="/images/bot.jpg" />
      </div>
      {
        welcomeChatShow && <div className='fixed bottom-[50px] right-[120px]'>
          <ChatBubble poccessor='bot' content='Wie kann ich helfen?' />
        </div>
      }
      {
        open && <div className='shadow-orange-900 shadow-md'>
          <ChatBox openChatBox={setOpen} />
        </div>
      }
    </div>
  )
}

export default Home
