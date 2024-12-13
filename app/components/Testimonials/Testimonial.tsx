import React from 'react'
import Image from 'next/image'

type Props ={
    image: string;
    name: string;
    role: string;
    description: string;
} 
    

const Testimonial = ({image, name, role, description}: Props) => {
  return (
    <div className="card flex flex-col gap-[33px] w-[270px] sm:min-w-[436px] px-[33px] py-[27px]">
        <div className="flex gap-2 items-center">
            <Image
                src={image}
                alt={`Profile Picture for testimoial by ${name}`}
                width={38}
                height={28}
            />
            <div className="flex flex-col">
                <p className="text-sm">{name}</p>
                <p className="text-sm text-[#777]">{role}</p>
            </div>
        </div>
        <p className="text-xs sm:text-sm line-clamp-6 ">{description}</p>
    </div>
  )
}

export default Testimonial