

const About = () => {
    return (
        <div className="bg-[#111111] border-t-2 border-[#1d1d1d]" id="about">
            {/* 0F172A */}
            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-5 py-20 text-white font-bai">
                <h1 className="lg:hidden mx-auto w-max font-bold text-4xl pb-3">About<span className="text-[#38BDF8]"> Me</span></h1>
                <div className="flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center">
                    <div>
                        <h1 className="lg:block hidden font-bold text-4xl pb-3">About<span className="text-[#38BDF8]"> Me</span></h1>
                        <p className="text-2xl text-[#38BDF8] font-semibold">Abujafar Chhaleh Naeem</p>
                        <p className="text-[#92a2b8]">Frontend Developer</p>

                        <p className="md:text-justify pt-5 text-lg leading-7 text-[#92a2b8]">Being passionate about problem-solving, I am constantly acquiring knowledge in computer programming and doing Honors in Mathematics at the National University, Bangladesh. I'm exploring web development and have already established myself as a React front-end developer (HTML, CSS, Tailwind, Javascript, React, React Router). In addition, I can work with some backend technologies. Eg: Nodejs, ExpressJS, MongoDB. So, I am moving towards becoming a full-stack developer.</p>
                        <button className="px-5 py-2 mt-4 text-[#0e1f35] font-bold bg-[#38BDF8] rounded-sm hover:bg-[#87c3e6] hover:text-[#1d1d1d] transition-all duration-500 ease-in-out"><a href="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/Complete%20Web%20Developmet%20Certificate.pdf?alt=media&token=83795c00-dbda-4806-b25b-969cd8d99050" target="_blank">Download CV</a></button>
                    </div>

                    <div className="max-w-[500px] lg:w-auto">
                        <img className="w-full" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/banner-me.png?alt=media&token=969d3c84-22fb-487b-a9f0-d02437919900" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;