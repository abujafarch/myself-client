import { Link } from "react-router-dom";


const Project = ({name, description, technology, liveLink, clientRepo, serverRepo}) => {
    return (
        <div className="rounded-3xl border-2 border-[#8aa8d367] text-[#263c6e] ">

                    <div className="border-b-2 pl-4 border-[#8aa8d367] h-10 flex items-center gap-3">
                        <p className="w-4 h-4 bg-[#8aa8d3] rounded-full"></p>
                        <p className="w-4 h-4 bg-[#8aa8d3] rounded-full"></p>
                        <p className="w-4 h-4 bg-[#8aa8d3] rounded-full"></p>
                    </div>
                    <div className="p-4">
                        <Link to='https://assetify-a3e7d.web.app/' target="_blank"><p className="text-2xl font-chakra text-[#8aa8d3] hover:text-[#38BDF8]">{name}</p></Link>
    
                        <p className="mt-2 text-lg text-[#92a2b8]"><span className="font-semibold">Description:</span> {description}</p>
    
                        {/* <p className="text-lg font-semibold mt-2"> Key Features: </p>
                        <p>- An employee can submit an asset request through this system and print all the details of the approved asset in PDF file format. If the office assets need to be returned, the employee can confirm the return through this system.</p>
    
                        <p>- HR can reject or approve the request from its dashboard. Assets can be added or deleted. New employee can add, remove from his team</p>
    
                        <p>- On the other hand, employees can easily request asset, return asset, print approved asset details, cancel asset request </p> */}
    
                        <p className="mt-3 text-lg text-[#92a2b8] font-semibold"><span className="">Technology used</span> : {technology}</p>
                        <div className="mt-5 text-lg text-[#38BDF8] font-semibold flex gap-5">
                            <Link to={liveLink} target="_blank" ><span>View</span></Link>
                            <Link to={clientRepo} target="_blank" ><span>Client repo</span></Link>
                            <Link to={serverRepo} target="_blank" ><span>Server repo</span></Link>
                        </div>
                    </div>
                </div>
    );
};

export default Project;