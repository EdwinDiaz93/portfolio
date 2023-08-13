import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn, textVariant } from "../utils/motion"


const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto "
    >
      <div
        className={`
      ${styles.paddingX}
      absolute inset-0 top-[8rem] max-w-7xl mx-auto flex flex-row
      items-start gap-5
      `}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 ml-2 sm:h-80 h-40 violet-gradient" />
        </div>

        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-[#915eff]">Cesar</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I devlop 3D visuals, user <br className="sm:block hidden " />
            interfaces and web applications
          </p>
          <motion.p variants={fadeIn('left', '', 0.1, 1)} className='mt-4 text-secondary text-[1.2rem] '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius maiores quae rerum repellendus illo recusandae
          </motion.p>

          <motion.div className="flex flex-row flex-wrap mt-20">
            <button
              className="border-4 border-secondary px-2 py-3 rounded-lg font-semibold hover:border-[#915eff] hover:text-[#915eff] transition-all duration-500"
            >Get my resume</button>
          </motion.div>

        </div>

      </div>




      <div className="absolute xs:-bottom-0 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[2.2rem] h-[4rem] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            >
            </motion.div>
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero