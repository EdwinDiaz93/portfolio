import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

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
    </>
  )
}

export default About