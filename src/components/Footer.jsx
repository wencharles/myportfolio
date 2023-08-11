import { motion } from "framer-motion";

import { SectionWrapper } from "../utils/hoc";
import { fadeIn } from "../utils/motion";
import twitter from '../assets/twitter.png';
import ig from '../assets/ig.png';
import skype from '../assets/skype.png';
import github from '../assets/github.png';



const Footer = () => {
  return (
    <>
      <div className="w-full flex overflow:hidden">
        <motion.footer
          variants={fadeIn("up", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] loading-[30px] max-w-3xl flex gap-10"
        >
          <div className="flex gap-5">
            <a href="https://github.com/Ze7Hu" className="h-10 w-10"><img src={github} alt="facebook"></img></a>
            
            <a href="https://instagram.com/hiidz1?igshid=OGQ5ZDc2ODk2ZA==" className="h-10 w-10"><img src={ig} alt="instagram"></img></a>
            <a href="#" className="h-10 w-10"><img src={twitter} alt="twitter"></img></a>
            {/* <a href="#" className="h-10 w-10"><img src={skype} alt="skype"></img></a> */}
          </div>
          <div className="pt-2"><small>Copyright 2023.</small></div>
        </motion.footer>
      </div>
    </>
  )
}

export default SectionWrapper(Footer, "")