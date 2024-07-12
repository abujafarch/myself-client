import { useState } from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {


    const [menuOpen, setMenuOpen] = useState(false)


    return (
        <div className="py-2 lg:px-10 sm:px-8 px-5 z-50 fixed w-full top-0 border-b border-[#75757523] left-0 backdrop-blur-xl text-white bg-[#0b1322be]">

            <div className="max-w-[1280px] items-center flex justify-between mx-auto">
                <div>
                    <a href='#home'><img className="w-[150px]" src="https://i.ibb.co/L6CpjCs/abujafar-logo-prpl.png" alt="abujafar" /></a>
                </div>

                <div onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-2xl text-[#A1DDFF] cursor-pointer">
                    <p><GrMenu></GrMenu></p>
                </div>

                <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute sm:static sm:flex sm:flex-row flex-col sm:bg-transparent sm:p-0 left-5 top-5 bg-[#19262e] py-5 px-10 rounded-md gap-5 text-lg text-[#A1DDFF] font-bai font-medium`}>
                    {/* <a href="#home">Home</a> */}
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#blog">Blogs</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
