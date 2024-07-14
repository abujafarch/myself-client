import { Link } from "react-router-dom";
import Project from "./Project";
import Titles from "../../components/Titles";


const Projects = () => {
    return (
        <div className="bg-[#111111] pb-10 pt-20" id="projects" >

            <Titles
                title={"Projects"}
                classes={"projects"}
            />

            <div className="max-w-[1280px] mx-auto lg:px-10 sm:px-8 px-2 py-10 text-white grid lg:grid-cols-3 md:grid-cols-2 gap-5">

                <Project
                    name={"Assetify - Manage your assets"}
                    description={"This project is a digital solution to manage all assets of an office. Creating connections between HR managers and employees to digitally manage employee asset issuance and returns information and through this HR manager can easily keep track of all assets. This saves a lot of time and reduces the chances of losing assets."}
                    technology={"Tailwind, Javascript, React, Express JS, MongoDB"}
                    liveLink={"https://assetify-a3e7d.web.app/"}
                    clientRepo={"https://github.com/abujafarch/assetify-client"}
                    serverRepo={"https://github.com/abujafarch/assetify-server"}
                />
                <Project
                    name={"Tripster - Find your south asia destination"}
                    description={"This is a project that provides detailed information about various tourist places in South Asia. It will help you to know detailed information about all tourist spots in South Asia. It can also be called tourism spot sharing platform. Here anyone can share details about any spot in South Asia."}
                    technology={"Tailwind, Javascript, React, Express JS, MongoDB"}
                    liveLink={"https://tripster-e0c28.web.app/"}
                    clientRepo={"https://github.com/abujafarch/tripster-client-a10"}
                    serverRepo={"https://github.com/abujafarch/tripster-server-a10"}
                />
                <Project
                    name={"Wisdom - Manage your school library"}
                    description={"This website serves as a comprehensive management tool for the school library, facilitating students to book loans and returns through this system. This digital platform streamlines the process of managing library resources, ensuring accurate records, and reducing administrative workload."}
                    technology={"Tailwind, Javascript, React, Express JS, MongoDB"}
                    liveLink={"https://wisdom-cca7e.web.app/"}
                    clientRepo={"https://github.com/abujafarch/wisdom-client-a11"}
                    serverRepo={"https://github.com/abujafarch/wisdom-server-a11"}
                />
            </div>
        </div>
    );
};

export default Projects;