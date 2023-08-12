import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, title, icon }) => {
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
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview. </h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='mt-4 text-secondary text-[1.1rem] m-w-3xl leading-[1.9rem]'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius maiores quae rerum repellendus illo recusandae, exercitationem corrupti earum voluptate similique perspiciatis. Aliquid, voluptatum deserunt sint esse ducimus voluptate magnam porro assumenda quas ad maiores distinctio. Itaque sit ea similique culpa voluptatem molestiae iusto inventore sequi facilis, nemo hic numquam molestias eos illo doloribus ut dolore, temporibus non mollitia nesciunt obcaecati! Et suscipit totam natus, distinctio unde magni hic doloremque, culpa nesciunt a, deserunt in illo atque. Voluptatem, fugit asperiores? Ut odit ea consequuntur magnam quisquam? Impedit officiis voluptate dolores, quis ab ut esse assumenda beatae facilis ad ipsam commodi officia?
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About,'about');