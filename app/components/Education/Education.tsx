import React from 'react'
import Image from 'next/image'
import { routeModule } from 'next/dist/build/templates/pages';
import Reveal from '../Reveal';
type Props = {
    id: number;
    image: string;
    school: string;
    major: string;
    description: string;
    dates: string;
}

const Education = ({id, image, school, major, description, dates}: Props) => {
  return (
    <Reveal initialX={id % 2 === 0 ? -60 : 60} delay={0.5 * id}>
      <div className="card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-[27px] md:px-[33px] gap-3">
        <div className="flex flex-col items-start md:flex-row gap-1 md:gap-0 md:justify-between">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Image src={image} alt={`Image for ${school}`} width={52} height={52} />
            <h3 className="text-xl font-medium">{school}</h3>
          </div>
          <p className="text-base md:text-xl font-medium">{major}</p>
        </div><br/>
        <p className="text-sm md:text-base">{description}</p>
        <p className="text-sm/1 md:text-base">{dates}</p>
      </div>
    </Reveal> 
  )
}

export default Education