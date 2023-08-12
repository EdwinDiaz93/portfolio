import { motion } from "framer-motion"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { fadeIn, slideIn } from "../utils/motion"

const Contact = () => {


  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_4lx87kg',
      'template_4az0a5m',
      {
        from_name: form.name,
        to_name: 'Edwin',
        from_email: form.email,
        to_email: 'josephph1993@gmail.com',
        message: form.message,
      },
      'YPDbJGiJZacDI5CFF'
    ).then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you  as soon as possible');
      setForm({
        name: '',
        email: '',
        message: ''
      })
    }).catch((err) => {
      setLoading(false);
      console.log(err);
      alert('Something wen wrong');
    })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overfow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
        autoCapitalize="off"
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 grid grid-cols-1 gap-8"
        >
          <div className="grid grid-cols-1">
            <label htmlFor="name">Your Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="email">Your Email:</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="type some text..."
              className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[35rem] h-[25rem]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact');