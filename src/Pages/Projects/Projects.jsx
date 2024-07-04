import { Link } from "react-router-dom";


const Projects = () => {
    return (
        <div className="bg-[#0F172A] py-10" id="projects" >
            <h1 className="w-max mx-auto text-4xl text-[#A1DDFF] font-bold font-bai">Projects</h1>
            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-2 py-10 text-white font-bai grid lg:grid-cols-3 md:grid-cols-2 gap-5">

                <div className="text-[#92a2b8] border border-[#5d697a79] rounded-sm p-4">

                    <Link to='https://assetify-a3e7d.web.app/' target="_blank"><p className="text-2xl font-semibold hover:text-[#A1DDFF]">Assetify - manage your assets</p></Link>

                    <p className="mt-2"><span className="font-semibold text-[#A1DDFF]">Description:</span> This project is a digital solution to manage all assets of an office. By managing all the assets digitally, the HR manager can easily keep track of all the assets.This saves a lot of time and reduces the chances of losing assets.</p>

                    <p className="text-lg font-semibold mt-2"> Key Features: </p>
                    <p>- A comprehensive dashboard where HR manager can manage his all Assets easily</p>
                    <p>- HR can reject or approve the request from its dashboard. Assets can be added or deleted. New employee can add, remove from his team</p>
                    <p>- On the other hand, employees can easily request asset, return asset, print approved asset details, cancel asset request </p>

                    <p className="mt-3 font-semibold"><span className="text-[#A1DDFF]">Technology used</span>: Tailwind, Javascript, React, Express JS, MongoDB</p>
                    <div className="mt-5 font-semibold flex gap-5">
                        <Link to='https://assetify-a3e7d.web.app/' target="_blank" ><span className="text-[#A1DDFF]">View</span></Link>
                        <Link to='https://github.com/abujafarch/assetify-client' target="_blank" ><span className="text-[#A1DDFF]">Client repo</span></Link>
                        <Link to='https://github.com/abujafarch/assetify-server' target="_blank" ><span className="text-[#A1DDFF]">Server repo</span></Link>
                    </div>
                </div>

                <div className="text-[#92a2b8] border border-[#5d697a79] rounded-sm p-4">

                    <Link to='https://tripster-e0c28.web.app/' target="_blank"><p className="text-2xl font-semibold hover:text-[#A1DDFF]">Tripster - find your south asia destination</p></Link>

                    <p className="mt-2"><span className="font-semibold text-[#A1DDFF]">Description:</span> This is a project that provides detailed information about various tourist places in South Asia. You can know about all destinations in South Asia from here. Anyone can add a new destination here</p>

                    <p className="text-lg font-semibold mt-2"> Key Features: </p>
                    <p>- Anyone can now know and inform others about any tourist destination in South Asia</p>
                    <p>- You can browse tourist places by country</p>
                    <p>- Anyone can choose their destination by looking top reviews </p>

                    <p className="mt-3 font-semibold"><span className="text-[#A1DDFF]">Technology used</span>: Tailwind, Javascript, React, Express JS, MongoDB</p>
                    <div className="mt-5 font-semibold flex gap-5">
                        <Link to='https://tripster-e0c28.web.app/' target="_blank" ><span className="text-[#A1DDFF]">View</span></Link>
                        <Link to='https://github.com/abujafarch/tripster-client-a10' target="_blank" ><span className="text-[#A1DDFF]">Client repo</span></Link>
                        <Link to='https://github.com/abujafarch/tripster-server-a10' target="_blank" ><span className="text-[#A1DDFF]">Server repo</span></Link>
                    </div>
                </div>

                <div className="text-[#92a2b8] border border-[#5d697a79] rounded-sm p-4">

                    <Link to='https://wisdom-cca7e.web.app/' target="_blank"><p className="text-2xl font-semibold hover:text-[#A1DDFF]">Wisdom - manage your school library</p></Link>

                    <p className="mt-2"><span className="font-semibold text-[#A1DDFF]">Description:</span> This is a school library management website. Where you can manage all the details like who has taken out how many books from the school library and who has returned when.</p>

                    <p className="text-lg font-semibold mt-2"> Key Features: </p>
                    <p>- Here students can see the list and rating of all the books and can borrow the books</p>
                    <p>- School library authorities can add and update new books here</p>
                    <p>- Here are some famous quotes to inspire students to read books and a list of three top readers to inspire others to compete. </p>

                    <p className="mt-3 font-semibold"><span className="text-[#A1DDFF]">Technology used</span>: Tailwind, Javascript, React, Express JS, MongoDB</p>
                    <div className="mt-5 font-semibold flex gap-5">
                        <Link to='https://wisdom-cca7e.web.app/' target="_blank" ><span className="text-[#A1DDFF]">View</span></Link>
                        <Link to='https://github.com/abujafarch/wisdom-client-a11' target="_blank" ><span className="text-[#A1DDFF]">Client repo</span></Link>
                        <Link to='https://github.com/abujafarch/wisdom-server-a11' target="_blank" ><span className="text-[#A1DDFF]">Server repo</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;