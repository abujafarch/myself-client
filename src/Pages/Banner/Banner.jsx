
const Banner = () => {
    return (
        <div className="min-h-screen text-white banner">
            <div className="lg:min-h-screen pb-10 pt-28 lg:pt-0 lg:px-10 md:px-8 sm:px-8 px-5 max-w-[1600px] lg:gap-20 mx-auto flex flex-col lg:flex-row items-center relative justify-between">

                <h3 className="font-pacifico lg:hidden text-[#A1DDFF] absolute top-28 sm:top-40 left-5 text-2xl sm:text-3xl -rotate-6">👋 Hi i am abujafar</h3>

                <div className="lg:w-1/2 md:w-[65%] w-full ">
                    <img className="w-full" src="/src/assets/banner-img-final.png" />
                </div>

                <div className="lg:w-1/2 w-full text-[#A1DDFF]">
                    <h3 className="font-pacifico lg:block hidden text-3xl -rotate-6">👋 Hi i am abujafar</h3>
                    <h2 className="mt-12 2xl:leading-[90px] xl:leading-[85px] md:leading-[60px] lg:leading-[75px] leading-[50px] font-rowdies xl:text-6xl lg:text-5xl md:text-4xl text-3xl">Building <span className="special-text">dynamic</span>, user-friendly web applications with <span className="special-text">React</span> to enhance user experiences and drive <span className="special-text">innovation</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;