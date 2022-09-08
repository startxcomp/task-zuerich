import { NextPage } from 'next'
import React from 'react'
import Choice from './choice';

export interface AnswerProps {
    choices: string[];
    chatId: number;
    selectChoice: any;
}

const Answer: NextPage<AnswerProps> = (props: AnswerProps) => {
  return (
    <div className='flex flex-wrap justify-end gap-4'>
        {
            props.choices.map((choice, index) => (
                <Choice key={index} index={index} chatId={props.chatId} selectChoice={props.selectChoice} text={choice} />
            ))
        }
    </div>
  )
}

export default Answer