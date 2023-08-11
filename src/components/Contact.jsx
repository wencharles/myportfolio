import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '../utils/hoc';

import { styles } from '../styles';
import { slideIn } from '../utils/motion';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
 
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  }
   
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overfolw-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='w-full bg-black-100 p-8 rounded-2xl'
      >
        {/* <p className={styles.sectionSubText}>Get in touch</p> */}
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
         ref={formRef} 
         onSubmit={handleSubmit}
         className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Name</span>
            <input 
              type='text'
              name='name'
              required
              value={form.name}
              onChange={handleChange}
              placeholder='Name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input 
              required
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Message</span>
            <textarea 
              rows='7'
              required
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white
            font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")