import React from 'react'
import Image from 'next/image'
import { inherits } from 'util'
import Reveal from '../Reveal'
const Hero = () => {
  return (
    <section className="relative flex flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
        <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
            <Reveal initialX={-25}>
                <h1 className="text-2x1/1 text-center font-semibold block md:text-[30px] md:text-start md:inline"><span className="-ml-3">👋</span>Hello I&apos;m Corey Hilsenbeck, I'm a 
                {" "}
                <span className="block text-[24px] highlight mt-2 md:text-[35px] md:inline md:mt-0">Software Engineering Student</span> 
                </h1>
            </Reveal>
            <Reveal initialX={-30} delay={0.2}>
                <p className="text-center text-sm mx-6 md:text-[22px] md:text-start md:mx-0">I&apos;m obssessed with code and learning new skills.</p>
            </Reveal>
            <Reveal initialX={-40} delay={0.4}>
                <a 
                    href="mailto:cor.hilsen@gmail.com" 
                    className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl/6"
                    target="_blank"
                    >
                    Let's Connect{" "}
                    <Image 
                        src="/arrow_right_icon.svg" 
                        alt="Arrow Right Icon"
                        width={16}
                        height={16}
                    /> 
                </a>
            </Reveal>
        </div>
        <div className="relative group">
            <Reveal>
                <Image 
                    src="/profile_light_purple.png"
                    alt="Light Purple Rectangle"
                    height={430}
                    width={372}
                    className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"
                />
                <Image 
                    src="/profile_dark_purple.png"
                    alt="Dark Purple Rectangle"
                    height={430}
                    width={372}
                    className="hidden md:block w-[372px] h-[430px] absolute right-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"
                />
                <Image 
                    src="/me.jpg"
                    alt="Profile Picture"
                    height={357}
                    width={417}
                    className="hidden md:block min-w-[350px] h-[415px] ml-[-5px] mr-[15px] my-[8px] rounded-[20px] z-10 group-hover:scale-[102%] ease-in-out duration-300"
                />
            </Reveal>
        </div>
    </section>
  )
}

export default Hero