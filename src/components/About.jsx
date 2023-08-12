import { styles } from "../styles";
import mypic from "../assets/mypic.png";


const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center overflow-hidden">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto items-start xl:flex-row flex flex-col-reverse `}
      >
        <div className="flex-[0.8] p-8">
          <p className={styles.sectionSubText}>About Me</p>
          
          <h2 className={`${styles.sectionHeadText}`}>Hi, I'm <span className="text-[#915eff]">Wen Charles</span></h2>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Results-driven Senior Software Engineer and Support Engineer with over 3 years of experience            
            <br className="sm:block hidden" />
            Full Stack Engineer
          </p>
        </div>
        <div className="xl:flex xl:h-auto md:h-[550px] h-[350px]">
          <img 
            src={mypic}
            alt="profilepic"
            className="h-80 w-80 rounded-full content-cover border border-indigo-700"
          />
        </div>
      </div>
    </section>
  )
}

export default About