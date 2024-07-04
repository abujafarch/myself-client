import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="bg-[#0C1323]" id='contact'>
            <h1 className='text-4xl w-max text-[#A1DDFF] font-bold mx-auto pt-10'>Contact</h1>
            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-5 py-20">


                <div className='font-bai text-[#A1DDFF] font-semibold my-5'>
                    <h1>Email: 357jafar@gmail.com</h1>
                    <div className='flex gap-4'>
                        <a href='https://www.facebook.com/abujafarchhaleh.naeem' target='_blank' >facebook</a>
                        <a href='https://www.linkedin.com/in/abujafar-ch/' target='_blank' >linkedin</a>
                        <a href='https://github.com/abujafarch' target='_blank' >Github</a>
                    </div>
                </div>

                <form className='flex-col font-bai flex gap-5 text-[#A1DDFF]' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='outline-none p-2' type="text" name="user_name" />
                    <label>Email</label>
                    <input className='outline-none p-2' type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='outline-none p-2' name="message" />
                    <input className='bg-[#A1DDFF] mt-5 rounded-md px-3 py-2 cursor-pointer text-black font-semibold' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default Contact;