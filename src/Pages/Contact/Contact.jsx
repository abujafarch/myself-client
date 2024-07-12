import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { MdEmail } from "react-icons/md";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_iou7w97', 'template_1870kur', form.current, {
                publicKey: 'MERNj81KGkTt1Ba-1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Email sent successfully')
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('something went wrong. please try again')
                },
            );
    };

    return (
        <div className="bg-[#0C1323]" id='contact'>
            <h1 className='text-4xl w-max text-[#A1DDFF] font-bold mx-auto pt-10'>Contact</h1>
            <div className="max-w-[1280px] flex flex-row-reverse gap-5 mx-auto lg:px-10 sm:px-8 px-5 py-20">


                <div className='font-bai text-[#a1dcffcb] w-1/2 font-semibold my-5'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/Group%2015.png?alt=media&token=67205719-60e6-4308-950a-0fd478d4d3df" />
                    <div className='mt-5'>
                        <a href='https://www.facebook.com/abujafarchhaleh.naeem' target='_blank' >facebook</a>
                        <a href="" className='flex gap-3 items-center'><span className='text-2xl'><MdEmail /></span> 357jafar@gmail.com</a>
                        <a href='https://www.linkedin.com/in/abujafar-ch/' target='_blank' >linkedin</a>
                        <a href='https://github.com/abujafarch' target='_blank' >Github</a>
                    </div>
                </div>

                <form className='flex-col text-lg font-medium w-1/2 font-bai flex gap-5 text-[#ffffffd3]' ref={form} onSubmit={sendEmail}>
                    <input className='outline-none rounded-lg bg-[#a1dcff07] p-4 border-2 border-[#a1dcff46]' type="text" name="user_name" placeholder='Your Name' />
                    
                    <input className='outline-none rounded-lg p-4 bg-[#a1dcff07] border-2 border-[#a1dcff46]' type="email" name="user_email" placeholder='Your Email' />

                    <textarea className='outline-none min-h-[180px] rounded-lg p-2 bg-[#a1dcff07] border-2 border-[#a1dcff46]' name="message" placeholder='Write your message' />
                    <input className='bg-[#ECECFF] text-xl mt-5 rounded-md px-3 py-4 cursor-pointer text-black font-semibold' type="submit" value="Send message 🚀" />
                </form>
            </div>
        </div>
    );
};

export default Contact;