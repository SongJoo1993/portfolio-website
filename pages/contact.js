import emailjs from 'emailjs-com';
import { motion } from "framer-motion"
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [notification, setNotification] = useState(null);
  const form = useRef();

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        'service_jxpfvbi',
        'template_5139kke',
        form.current,
        'Zs1Y6z64zaVi51jrC'
      );

      setNotification({ type: 'success', message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      setNotification({ type: 'error', message: 'An error occurred while sending the email.' });
    }
  };

  const handleNotificationClose = () => {
    setNotification(null);
    if (notification.type === 'success') {
      form.current.reset();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="mb-3 block text-gray-800">Name</label>
            <motion.input
              type="text"
              name="from_name"
              whileFocus={{ boxShadow: "0px 0px 8px blue" }}
              {...register('from_name', { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors?.from_name && <span className="text-red-600">Name is required</span>}
          </div>
          <div className="mb-4">
            <label className="mb-3 block text-gray-800">From <span className='text-xs'>(Your email)</span></label>
            <motion.input
              type="email"
              name="email"
              whileFocus={{ boxShadow: "0px 0px 8px blue" }}
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors?.email && <span className="text-red-600">Email is required</span>}
          </div>
          <div className="mb-4">
            <label className="mb-3 block text-gray-800">Message</label>
            <motion.textarea
              name="message"
              whileFocus={{ boxShadow: "0px 0px 8px blue" }}
              {...register('message', { required: true })}
              className="w-full px-4 py-2 mb-3 border rounded-md"
            />
            {errors?.message && <span className="text-red-600">Message is required</span>}
          </div>
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
        {notification && (
          <div
            className={`mt-4 p-2 rounded-lg ${
              notification.type === 'success' ? 'bg-black text-white' : 'bg-red-500 text-white'
            }`}>
            <p>{notification.message}</p>
            <button
              className="font-semibold mt-1 text-sm text-white hover:underline"
              onClick={handleNotificationClose}>
              Close
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;
