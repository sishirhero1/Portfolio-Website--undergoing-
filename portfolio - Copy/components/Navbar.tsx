import { logo } from '@/public/assets';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
      <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
        <motion.div 
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:0.5}}>
          <Image className="w-20" src={logo} alt="logo" />
        </motion.div>
        <div className='hidden mdl:inline-flex items-center gap-7'>
          {/* Additional Navbar content */}
          <ul className='flex text-[13px] gap-7'>
            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link '>
              <motion.li 
              initial={{y: -10, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.1}}
              >Home
              </motion.li>
            </Link>

            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link '>
              <motion.li
              initial={{y: -10, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.1, delay: 0.1 }}>
                 About
              </motion.li>
            </Link>

            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link '>
              <motion.li
              initial={{y: -10, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.1, delay: 0.2 }}>
                 Experience
              </motion.li>
            </Link>

            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link '>
              <motion.li
              initial={{y: -10, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.1, delay: 0.3 }}>
                 Project
              </motion.li>
            </Link>

            <Link href="#home" className='flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link '>
              <motion.li
              initial={{y: -10, opacity:0}} 
              animate={{y:0, opacity:1}} 
              transition={{duration:0.1, delay: 0.4 }}>
                 Contact
              </motion.li>
            </Link>
          </ul>
          <a href='/assets/CV_sishir.pdf' target='_blank'>
          <motion.button 
          initial={{ opacity:0}} 
          animate={{ opacity:1}} 
          transition={{ delay: 0.5 }}
          className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300'
          >Resume</motion.button>
          </a>
        </div>
        <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300'></span>
            <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300'></span>

        </div>
      </div>   
    </div>
  );
}

export default Navbar;
