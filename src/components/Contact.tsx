import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import Swal from "sweetalert2"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"


interface formValues {
  name: string;
  email: string;
  message: string
}

const Contact = () => {

  const form = useForm<formValues>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;


  const onSubmitForm = (data: formValues) => {

    emailjs.send(
      'service_4lx87kg',
      'template_4az0a5m',
      {
        from_name: data.name,
        to_name: 'Edwin',
        from_email: data.email,
        to_email: 'josephph1993@gmail.com',
        message: data.message,
      },
      'YPDbJGiJZacDI5CFF'
    ).then(() => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you. I will get back to you  as soon as possible',
        showConfirmButton: false,
        timer: 2000
      });
      reset({
        name: '',
        email: '',
        message: '',
      })
    }).catch((err) => {
      console.log(err);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'something went wrong',
        showConfirmButton: false,
        timer: 2000
      });
    })
  }

  return (
    <div className="xl:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 overfow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-1 bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitForm)}
          className="mt-12 grid grid-cols-1 gap-8"
        >
          <div className="grid grid-cols-1">
            <label htmlFor="name">Your Name:</label>
            <input
              id="name"
              type="text"
              {...register('name', {
                required: {
                  value: true,
                  message: 'The name field is required'
                },
                minLength: {
                  value: 5,
                  message: 'You have to provide at least 5 characteres'
                }
              })}
              placeholder="Whats your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            <p className="font-semibold text-red-500 text-start">{errors.name?.message}</p>
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="email">Your Email:</label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: {
                  value: true,
                  message: 'the email field is required'
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'invalid email',
                },
              })}
              placeholder="email@example.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            <p className="font-semibold text-red-500 text-start">{errors.email?.message}</p>
          </div>
          <div className="grid grid-cols-1">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows={5}
              {...register('message', {
                required: {
                  value: true,
                  message: 'the message field is required'
                }
              })}
              placeholder="type some text..."
              className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
            <p className="font-semibold text-red-500 text-start">{errors.message?.message}</p>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {isSubmitting ? 'Sending' : 'Send'}
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