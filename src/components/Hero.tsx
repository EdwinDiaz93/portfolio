import { motion } from "framer-motion"
import { styles } from "../styles"
import { fadeIn } from "../utils/motion"


const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
    >
      <div
        className={`
      ${styles.paddingX}
      absolute inset-0 top-[8rem] max-w-5xl mx-auto flex flex-row
      items-start gap-5
      `}
      >
        <div className="flex flex-col justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 ml-2 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center" >
          <motion.div variants={fadeIn('left', '', 0.1, 1)} className='mt-4 text-secondary text-[1.2rem] sm:flex-[3]'>
            <h1 className={`text-4xl text-white`}>
              <span className="text-[#915eff] font-bold">Cloud architect,</span> google partner and professional trainer.
            </h1>
            <p className="my-4 text-secondary">
              Hi, im Cesar Arevalor, a passionate application developer and a cloud architect base in El Salvador, San Salvador.
            </p>
            <button
              className="border-4 border-secondary px-3 py-2   rounded-full font-semibold hover:border-[#915eff] hover:text-[#915eff] transition-all duration-500"
            >Get my resume</button>
          </motion.div>

          <img 
          src="https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg" 
          alt="admin" 
          className="rounded-full w-24 h-24 sm:w-52 sm:h-52 mt-10 sm:mt-0 flex-1" />

        </div>

      </div>




      <div className="absolute xs:-bottom-0 bottom-0 w-full hidden sm:flex justify-center items-center">
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