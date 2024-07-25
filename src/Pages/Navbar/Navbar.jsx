import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className="py-2 lg:px-10 sm:px-8 px-5 z-50 fixed w-full top-0 border-b border-[#75757523] left-0 backdrop-blur-xl text-white bg-[#1313139f]">

            <div className="max-w-[1280px] items-center flex justify-between mx-auto">
                <div>
                    <a href='#home'><img className="w-[150px]" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/abujafar-logo-prpl.png?alt=media&token=2f03b6fe-9335-4dfb-a619-fd267386e840" alt="abujafar" /></a>
                </div>

                <div onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-2xl text-[#A1DDFF] cursor-pointer">
                    <p><GrMenu></GrMenu></p>
                </div>

                <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute sm:static sm:flex sm:flex-row flex-col sm:bg-transparent sm:p-0 left-5 top-5 bg-[#19262e] py-5 px-10 rounded-md gap-5 text-lg text-[#ffffff] font-bai font-medium`}>
                {/* #38BDF8 */}
                    {/* <a href="#home">Home</a> */}
                    <a onClick={() => setMenuOpen(false)} href="#about">About</a>
                    <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
                    <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
                    <a onClick={() => setMenuOpen(false)} href="#blog">Blogs</a>
                    <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
