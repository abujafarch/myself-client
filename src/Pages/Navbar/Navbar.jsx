import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="py-2 lg:px-10 sm:px-8 px-5 z-50 fixed w-full top-0 border-b border-[#75757523] left-0 backdrop-blur-xl text-white bg-[#0b13228a]">

            <div className="max-w-[1280px] items-center flex justify-between mx-auto">
                <div>
                    <Link to='/'><img className="w-[150px]" src="https://i.ibb.co/L6CpjCs/abujafar-logo-prpl.png" alt="abujafar" /></Link>
                </div>

                <nav className="sm:flex hidden gap-5 text-lg text-[#A1DDFF] font-bai font-medium">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    {/* <a href="#projects">Blogs</a> */}
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;