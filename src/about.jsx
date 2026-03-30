import react from "react";
import Navbar from "./navbar";

const About =()=>{
    return(
        <>
        <Navbar />
        <div className="flex px-6 md:flex-row xs:flex-col gap-8 ">
<div className="flex items-center relative gap-4">
    <div>
    <img className="w-64 h-52 rounded-md" src="about1.jpg" />
    </div>
    <div className="flex flex-col gap-4">
    <img className="w-64 h-24 rounded-md" src="about4.avif" />
    <img className="w-64 h-24 rounded-md" src="about2.jpg" />
    </div>
    <div className="w-20 h-20 rounded-full shadow-lg bg-white absolute -left-4 -bottom-6">

    </div>
</div>
<div className="flex flex-col gap-2">
    <span className="text-2xl font-semibold">At Sadetech We guide your Journey with our Expertise</span>
    <span className="text-gray-700">
        It is our experience that equips us, our emotions that drive us, and our creativity that sets us apart.

Our rock-solid team are Specializing in web and mobile app development, our company takes pride in crafting top-tier software products.
    </span>
</div>
        </div>
        </>
    )
}

export default About;