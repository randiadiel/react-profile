"use client"

import Link from 'next/link';
import { Masonry } from 'react-plock';

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
                (props) => <Link href={`/${props.id}`}>
                    <div key={props.id} style={{ background: props.color, color: "black", maxHeight: "290px", overflow: 'hidden' }} className="rounded-[20px] p-5">
                        <div style={{ overflow: "hidden", height: "100%" }}>
                            <h3 className='text-xl font-black'>{props.title}</h3>
                            <p>{props.content}</p>
                        </div>
                    </div>
                </Link>
            }
        /></>;
}

export default MasonryWrapper;