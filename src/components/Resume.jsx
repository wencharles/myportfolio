import { motion } from "framer-motion";

import { SectionWrapper } from "../utils/hoc";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";
import resume from '../assets/resume.pdf';



const Resume = () => {
  return (
    <>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px]  loading-[30px]"
        >
          <h2 className={styles.sectionHeadText}>Resume</h2>
          <p className="py-2 text-white p-2">Proven ability to deliver innovative solutions and lead
            cross-functional teams. Adept in Python, Django, Java, Spring boot, React, React Native, Redis, PostgreSQL,
            Firebase, Docker and micro services. Strong background in providing customer support, troubleshooting and
            resolving system-related issues. Committed to continuous learning and professional development.
          </p>

          <a
            href={`${resume}`}
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl mt-4 float-right'
            download
          >
            Download
          </a>
          
        </motion.p>
      </div>
    </>
  )
}

export default SectionWrapper(Resume, "resume")