
const Banner = () => {
    return (
        <div className="min-h-screen text-white banner" id="home">
            <div className="lg:min-h-screen pb-10 pt-28 lg:pt-0 lg:px-10 md:px-8 sm:px-8 px-5 max-w-[1600px] lg:gap-20 mx-auto flex flex-col lg:flex-row items-center relative justify-between">

                <h3 className="font-pacifico lg:hidden text-[#A1DDFF] absolute top-28 sm:top-40 left-5 text-2xl sm:text-3xl -rotate-6">👋 Hi i am abujafar</h3>

                <div className="lg:w-1/2 flex items-center justify-center md:w-[65%] w-full ">
                    <img className="w-full xl:scale-75" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/banner-img-final.png?alt=media&token=c03b4b0b-1242-4d08-9f8a-1a7868d198ac" />
                </div>

                <div className="lg:w-1/2 w-full text-[#ffffff]">
                    <h3 className="font-pacifico lg:block hidden text-3xl -rotate-6">👋 Hi i am abujafar</h3>
                    <h2 className=" mt-12 2xl:leading-[80px] xl:leading-[67px] md:leading-[55px] lg:leading-[60px] leading-[50px] font-chakra  2xl:text-6xl xl:text-5xl md:text-4xl text-3xl">Building <span className="special-text">dynamic</span>, user-friendly web applications with <span className="special-text">React</span> to enhance user experiences and drive <span className="special-text">innovation</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Banner;