import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { achievements } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import Modal from "./Modal"
import { useState } from 'react';



const AchievementCard = ({ index, name, description, image }) => (
    <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
        <Tilt
            options={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
            <div className="relative w-full h-[230px] ">
                <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
            </div>

            <div className="mt-5">
                <h3 className="text-white font-bold text-[1.8rem]">{name}</h3>
                <p className="mt-2 text-secondary text-[0.9rem]">{description}</p>
            </div>
        </Tilt>
    </motion.div>
)


const Achievements = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <motion.div
                variants={textVariant()}
            >
                <p className={styles.sectionSubText}>My achievements</p>
                <h2 className={styles.sectionHeadText}>See all my certifications </h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[1rem]  leading-[2rem]"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate excepturi, dolorem quod iste fugit laboriosam. Explicabo laborum dolores, maiores aliquam enim soluta quasi necessitatibus fugiat eos tempora! Rem tempora nostrum praesentium dolores perferendis sapiente? Maxime praesentium nesciunt natus quidem odit magnam tempora accusamus voluptas ullam, quod eius, adipisci eos, quis nisi dignissimos explicabo nemo deserunt assumenda id totam ab omnis nulla iure? Excepturi consequuntur quod dolorem consequatur ullam at ducimus ut sapiente sunt voluptates tempore culpa expedita, ipsam, corporis minus aspernatur autem necessitatibus laudantium? Accusamus aliquid voluptatum repudiandae repellendus impedit expedita praesentium incidunt dicta quo, eum voluptate tenetur corporis sed?
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {
                    achievements.map((achievement, index) => (
                        <AchievementCard
                            key={`achievement${index}`}
                            index={index}
                            {...achievement}
                        />
                    ))
                }
            </div>

        </>
    )
}

export default SectionWrapper(Achievements, 'achievement')