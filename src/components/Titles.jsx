

const Titles = ({ title, classes }) => {
    return (
        <div>
            <h1 className={`w-max mx-auto px-3 py-[2px] text-4xl bg-[#38BDF8] text-[#38BDF8] font-bold font-bai relative title ${classes}`}>{title}</h1>
        </div>
    );
};

export default Titles;