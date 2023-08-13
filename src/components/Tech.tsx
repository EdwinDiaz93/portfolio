import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';


const TechCard = ({ index, name, icon }:any) => {
  return (
    <Tilt className="sm:w-[15rem] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={name} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{name}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <TechCard
          key={technology.name}
          {...technology}
          className='w-28 h-28'
        >
          
        </TechCard>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, '');