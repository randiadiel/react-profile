"use client"

import { Masonry } from 'react-plock'

import { NOTES } from '@/app/_constants';

const MasonryWrapper = () => {
    return <>
        <Masonry
            config={{
                gap: 10,
                columns: 2
            }}
            items={NOTES}
            render={
                (props) => <div key={props.id} style={{ background: props.color, color: "black" }} className="rounded-[20px] p-5">
                    <h3 className='text-xl font-black'>{props.title}</h3>
                    <p>{props.content}</p>
                </div>
            }
        /></>;
}

export default MasonryWrapper;