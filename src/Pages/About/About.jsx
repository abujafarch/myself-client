

const About = () => {
    return (
        <div className=" bg-[#0F172A] border-t-2 border-[#21293B]">
            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-5 py-24 text-white font-bai">
                <h1 className="lg:hidden mx-auto w-max font-bold text-4xl pb-3">About<span className="text-[#A1DDFF]"> Me</span></h1>
                <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
                    <div>
                        <h1 className="lg:block hidden font-bold text-4xl pb-3">About<span className="text-[#A1DDFF]"> Me</span></h1>
                        <p className="text-2xl text-[#A1DDFF] font-semibold">Abujafar Chhaleh Naeem</p>
                        <p className="text-[#92a2b8]">Frontend Developer</p>
    
                        <p className="md:text-justify pt-5 text-lg leading-7 text-[#92a2b8]">Being passionate about problem-solving, I am constantly acquiring knowledge in computer programming and studying Mathematics at the National University, Bangladesh. I'm exploring web development and have already established myself as a React front-end developer (HTML, CSS, Tailwind, Javascript, React, React Router). In addition, I can work with some backend technologies. Eg: Nodejs, ExpressJS, MongoDB. So, I am moving towards becoming a full-stack developer.</p>
                    </div>
    
                    <div className="max-w-[500px] lg:w-auto">
                        <img className="w-full" src="/src/assets/banner-me.png" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;