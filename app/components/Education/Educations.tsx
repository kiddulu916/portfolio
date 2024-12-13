import React from 'react'
import education from '@/data/education.json'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Education from './Education'
import Image from 'next/image'

const Educations = () => {
  return (
    <SectionContainer id="education">
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx-[64px]">
        <SectionHeader plainText='🏫 History of my' highlightText='Education' />
        <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
          {education.map((education, id) => (
            <Education key={id} id={id} image={education.image} school={education.school} major={education.major} description={education.description} dates={education.dates} />
          ))}
        </div>
      </div>
      <div className="circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10">
          <Image src="/bracket_icon.svg" alt="bracket icon" width={23} height={23} />
      </div>
      <div className="circle-icon h-14 w-14  left-1.5 bottom-0 md:left-[90px] -z-10">
          <Image src="/electricity_icon.svg" alt="electricity icon" width={23} height={23} />
      </div>
    </SectionContainer>
 
  )
}

export default Educations