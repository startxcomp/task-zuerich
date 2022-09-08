import { NextPage } from 'next'
import React from 'react'

export interface ChoiceProps {
    text: string;
    chatId: number;
    index: number;
    selectChoice: any;
}

const Choice: NextPage<ChoiceProps> = (props: ChoiceProps) => {
  return (
    <div className='py-1 text-[12px] rounded-[5px] px-3 bg-white text-center' onClick={() => props.selectChoice(props.chatId, props.index)}>
        {props.text}
    </div>
  )
}

export default Choice