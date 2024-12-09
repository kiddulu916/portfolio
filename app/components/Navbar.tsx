import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
        <button className="bg-background card-shadow p-3 md:hidden rounded">
            <Image 
                className="block dark:hidden"
                src="../../public/menu_icon_light.svg"
                width="20"
                height="20"
                alt="menu icon"
            />
            <Image
                className="hidden dark:block"
                src="../../public/menu_icon_dark.svg"
                width="20"
                height="20"
                alt="menu icon"
            />
        </button>
    </div>
  );
};

export default Navbar