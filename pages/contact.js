import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const [notification, setNotification] = useState(null);
  const form = useRef();

  const onSubmit = async () => {
    try {
      await emailjs.sendForm(
        'service_jxpfvbi', // Replace with your EmailJS service ID
        'template_5139kke', // Replace with your EmailJS template ID
        form.current,
        'Zs1Y6z64zaVi51jrC' // Replace with your EmailJS user ID
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
      form.current.reset(); // Clear the form
    }
  };

  return (
    <>
     <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block text-gray-800">Name</label>
            <input
              type="text"
              name="from_name"
              {...register('from_name', { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors?.from_name && <span className="text-red-600">Name is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors?.email && <span className="text-red-600">Email is required</span>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-800">Message</label>
            <textarea
              name="message"
              {...register('message', { required: true })}
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors?.message && <span className="text-red-600">Message is required</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </form>
        {notification && (
            <div
                className={`m-4 mb-4 ${
                notification.type === 'success' ? 'bg-black text-white' : 'bg-red-500 text-white'
                } p-2 rounded-lg`}
            >
                <p>{notification.message}</p>
                <button className="font-semibold mt-1" onClick={handleNotificationClose}>
                Close
                </button>
            </div>
        )}
      </div>
    </>
  );
};

export default Contact;
