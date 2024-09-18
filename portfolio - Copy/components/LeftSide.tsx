import { TbBrandGithub } from "react-icons/tb";
import { SlSocialYoutube, SlSocialFacebook, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import React from 'react';

const LeftSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4">

        <a href="https://github.com/sishirhero1" target="blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <TbBrandGithub />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/sishir-anand-indupalli-354419270/" target="blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialLinkedin />
          </span>
        </a>

        <a href="https://www.instagram.com/sishiranand" target="blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialInstagram />
          </span>
        </a>

        <a href="https://www.facebook.com/profile.php?id=100094575335260" target="blank">
          <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex 
          items-center justify-center hover:text-textGreen cursor-pointer 
          hover:-translate-y-2 transition-all duration-300">
            <SlSocialFacebook />
          </span>
        </a>

        

        
      </div>
      <div className="w-[2px] h-32 bg-textDark">

      </div>
    </div>
  );
}

export default LeftSide;
