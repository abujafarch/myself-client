

const Skills = () => {
    return (
        <div className="bg-[#0C1323] py-20 text-white font-bai" id="skills">
            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-5">
                <div className="flex lg:flex-row flex-col gap-10">
                    <div className="lg:w-1/2">
                        <h2 className="text-[#A1DDFF] text-3xl font-bold underline  underline-offset-4">Skills</h2>
                        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 text-[#92a2b8] sm:text-xl text-base font-bold">

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/HTML.png?alt=media&token=4b466a7b-d46a-4b17-8414-14274181ed87" />

                                <p>HTML</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/css.png?alt=media&token=8446f9e1-595f-4a09-87ef-6666c49c1b66" />

                                <p>CSS</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/tailwind.png?alt=media&token=f5a832c8-3e19-48a8-bb83-6fa6d5c857bc" />

                                <p>Tailwind</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/JavaScript.png?alt=media&token=99bb6223-c732-4158-920c-8f04ac84e070" />

                                <p>Javascript</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/react.png?alt=media&token=d211ada7-9230-4778-8ce3-3b24f9e30698" />

                                <p>React</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/firebase.png?alt=media&token=b370c57f-598c-4c89-92fd-3699b51e6355" />

                                <p>Firebase</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/express.png?alt=media&token=6e13270b-fd62-4ffd-b73d-b6396174c5b1" />

                                <p>Express JS</p>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="sm:w-auto w-12" src="https://firebasestorage.googleapis.com/v0/b/myself-fe2c5.appspot.com/o/mongo.png?alt=media&token=860eb0fb-91c8-4081-8059-520b5bbca47f" />

                                <p>MongoDB</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="text-[#92a2b8] text-3xl font-bold underline  underline-offset-4">Education</h2>
                        <div className="mt-5 text-[#92a2b8]">
                            <p className="font-semibold text-[#A1DDFF]">July, 2019 - December, 2021</p>
                            <p className="font-semibold">HSC -  Higher Secondary Certificate</p>
                            <p className="font-semibold">Comilla Residential College</p>
                        </div>
                        <div className="mt-5 text-[#92a2b8]">
                            <p className="font-semibold text-[#A1DDFF]">June, 2023 - Current</p>
                            <p className="font-semibold">Honors in Mathematics</p>
                            <p className="font-semibold">National University, Bangladesh</p>
                        </div>
                        <div className="mt-5 text-[#92a2b8]">
                            <p className="font-semibold text-[#A1DDFF]">June, 2022 - May, 2023</p>
                            <p className="font-semibold">During this period, after completing HSC, I took admission test in public university but got no chance. Then next year after taking admission test again, no chance again. Then I got admitted to National University in June 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;