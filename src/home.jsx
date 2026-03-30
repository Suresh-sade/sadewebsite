import react,{useState,useEffect} from "react";
import { Icon } from "@iconify/react";
import Navbar from "./navbar";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";

const Home =()=>{
const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, 3000);
  return () => clearInterval(interval);
}, []);

    const UnderlineMaskDefinition = () => (
  <svg width="0" height="0">
    <defs>
      {/* This clipPath defines the exact, imperfect geometry from image_5.png */}
      <clipPath id="hand-drawn-stroke" clipPathUnits="objectBoundingBox">
        {/* Normalized SVG path for the hand-drawn look */}
        <path d="M0,0.5 C0.05,0.4,0.15,0.25,0.25,0.2 C0.35,0.15,0.45,0.2,0.55,0.3 C0.65,0.4,0.75,0.55,0.85,0.6 C0.95,0.65,0.98,0.55,1,0.5 C0.98,0.7,0.95,0.85,0.85,0.9 C0.75,0.95,0.65,0.9,0.55,0.8 C0.45,0.7,0.35,0.55,0.25,0.5 C0.15,0.45,0.05,0.55,0,0.6 Z" />
      </clipPath>
    </defs>
  </svg>
);

    const BlobMaskDefinition = () => (
  <svg width="0" height="0">
    <defs>
      {/* This clipPath defines the exact custom shape from image_3.png */}
      <clipPath id="custom-blob-shape" clipPathUnits="objectBoundingBox">
        <path d="M0.385,0.015 C0.584,-0.021,0.803,0.038,0.92,0.22 C1.037,0.403,1.002,0.648,0.865,0.817 C0.728,0.985,0.528,1.012,0.329,0.985 C0.13,0.959,-0.007,0.887,0.000,0.729 C0.007,0.57,0.187,0.052,0.385,0.015" />
      </clipPath>
    </defs>
  </svg>
);

    const services = [
    {
      title: "DATA ANALYTICS",
      desc: "Transform data into actionable insights with precision and expertise. We help organizations make informed decisions.",
      iconColor: "#42dbb7",
    
      glow: "shadow-[0_0_40px_-10px_rgba(45,212,191,0.3)]",
      icon: (
        <svg className="w-6 h-6 text-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 12h7c-.5 4.34-3.66 7.82-8 8.44V12h1zm-2 0H4c.5-4.34 3.66-7.82 8-8.44V12h-1z" />
        </svg>
      )
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "Craft scalable, high-performance web solutions tailored to your brand and business goals. From intuitive UI/UX to robust backend.",
      iconColor: "#FB7185",
      glow: "shadow-[0_0_40px_-10px_rgba(244,114,182,0.3)]",
      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      )
    }
    ,
    {
      title: "CYBER SECURITY",
      desc: "Safeguard your digital assets with proactive security strategies. Our cybersecurity services protect against evolving threats, ensure compliance, and foster trust through end-to-end.",
      iconColor: "#8B5CF6",
glow: "shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]",      icon: (
        <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      )
    }
  ];

  const features = [
    { title: "A highly skilled Project Manager.",icon:"hugeicons:language-skill", color: "#F43F5E", bg: "linear-gradient(135deg, #fff 0%, #fff1f2 100%)" },
    { title: "A proficient Business Analyst.",icon:"ep:data-analysis", color: "#8B5CF6", bg: "linear-gradient(135deg, #fff 0%, #f5f3ff 100%)" },
    { title: "Experienced Frontend/ Backend.",icon:"streamline:desktop-code-remix", color: "#F59E0B", bg: "linear-gradient(135deg, #fff 0%, #fffbeb 100%)" },
    { title: "Reliable DevOps Engineers.",icon:"ph:infinity-bold", color: "#0EA5E9", bg: "linear-gradient(135deg, #fff 0%, #f0f9ff 100%)" }
  ];

  const testimonials = [
  { text: "we would have needed a developer for the 3D. we can work in parallel focus on crafting assets, and engineers don’t have to rebuild them from scratch.", color: "#a855f7" },
  { text: "Everything just works. Clean UI and great Productivity and performance.  Now we can work in parallel. Designers can focus on crafting assets, and engineers”", color: "#7c3aed" },
];

const items = testimonials.map((f, i) => (
  <div key={i} className="p-4 bg-black w-full rounded-xl">
    <p>{f.text}</p>
  </div>
));

    return(
        <>
        <Navbar />
        <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.6 }} // Staggers each card
        viewport={{ once: true }} className="px-6 pt-10 pb-20 flex flex-col items-center text-center">
        
                <div className="relative w-full max-w-md">
          {/* Background Decorative Shape */}
          <div className="absolute -right-4 -top-8 w-40 h-40 bg-[#111827] rounded-full -z-10 opacity-100"></div>
          
          {/* Main Hero Image Frame */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team working" 
              className="w-full h-auto object-cover"
            />
            
            {/* Floating "Technology Simplified" Badge */}
            <div className="absolute bottom-6 left-6 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 border border-gray-100">
              <div className="bg-[#2EB67D]/10 p-2 rounded-lg">
                <svg className="w-5 h-5 text-[#2EB67D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-gray-800 leading-none">Technology</p>
                <p className="text-[10px] font-medium text-gray-500">Simplified</p>
              </div>
            </div>
          </div>
        </div>
        {/* Headline */}
        <h1 className="text-[32px] text-left mt-4 leading-tight font-bold mb-4 max-w-sm">
          The destination where your software comes to life
        </h1>

        {/* Sub-headline with left accent border (centered container) */}
        <div className="relative border-l-4 border-action pl-4 py-1 mb-8 text-left max-w-xs mx-auto">
          <p className="text-sm text-gray-600 leading-relaxed">
            Elevate your business operations, maintenance, and customer experience with authentic software solutions of superior quality.
          </p>
        </div>
<div className="w-full">
        <button className="w-max bg-action hover:bg-[#259465] text-white font-semibold py-3 px-6 rounded-full transition-all flex items-center justify-center mb-12 shadow-md w-full">
Free Consulting           <Icon icon="grommet-icons:form-next-link" width="24" height="24" />
        </button>
</div>
        {/* Primary CTA Button */}


        {/* Visual Asset Section */}


      </motion.div>
      <section className="bg-white px-6 py-2 font-sans">
      {/* Centered Heading */}
<UnderlineMaskDefinition />

      {/* The Updated Design Stack */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: index * 0.6 }} // Staggers each card
        viewport={{ once: true, amount: 0.2 }} className="flex flex-col mb-4 items-start">
        
        {/* Heading text - Bold, Dark Gray, and Tight */}
        <h2 className="text-2xl font-extrabold text-gray-950 mb-0.5 tracking-tight">
          What We Offer
        </h2>
        
        {/* The CUSTOM "Hand-Drawn" Underline Mask */}
        {/* We use width arbitrary values [140px] to match the figma length */}
        <div 
          className="w-[140px] h-[7px] bg-action"
          style={{
            // Apply the custom mask to the background-colored div
            clipPath: 'url(#hand-drawn-stroke)',
            WebkitClipPath: 'url(#hand-drawn-stroke)' // Support for Safari
          }}
        />
        
      </motion.div>


      {/* Vertical Card Stack */}
      <div className="flex flex-col gap-9">
        {services.map((service, index) => {
            const shapeId = `blob-shape-${index}`; // Unique ID per card
            return(
              <motion.div 
        key={index}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }} // Staggers each card
        viewport={{ once: true }}
 className={`bg-white rounded-3xl p-6 border border-gray-50 flex flex-col items-center text-center transition-transform active:scale-95 ${service.glow}`}      >

            {/* Icon with colored background blob */}
<div 
      className={`w-14 h-14 flex items-center justify-center mb-2 shadow-lg transition-transform hover:scale-105`}
      style={{
        /* Using your service colors + a fallback to make sure it's never invisible */
        backgroundColor: service.iconColor, 
        /* This specific radius creates a non-box, non-circle organic shape */
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
      }}
    >
        {/* Make sure the icon has a set size */}
        <div className="ml-3 text-white mt-2 w-8 h-8">
           {service.icon}
        </div>
  
    </div>
    

            <h3 className="text-md font-extrabold tracking-wider text-gray-800 mb-1">
              {service.title}
            </h3>

            <p className="text-gray-500 text-xs leading-relaxed max-w-[280px]">
              {service.desc}
            </p>
         </motion.div>
          
        )})}
      </div>
    </section>
    <div className="p-6 mt-12 flex bg-/20 flex-col gap-10">
              <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }} // Staggers each card
        viewport={{ once: true }} className="bg-white rounded-xl">
      <img className="rounded-lg" src="itsolutions.webp" />
      
      <div className="flex flex-col p-6 gap-1">
      <p className="text-2xl font-semibold">IT Solutions</p>
      <span>
        Deliver IT solutions with dedication and professionalism, ensuring efficiency, compliance, and a focus on exceptional results tailored to client needs, innovation, reliability, and security.
      </span>
      <button className="bg-action mt-2 py-2 px-4 font-medium rounded-full text-white w-max">
        Read more
      </button>
      </div>


        </motion.div>
                     <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }} // Staggers each card
        viewport={{ once: true }} className="bg-white rounded-xl">
      <img className="rounded-lg" src="security.avif" />
      
      <div className="flex flex-col p-6 gap-1">
      <p className="text-2xl font-semibold">IT Security Services</p>
      <span>
       Implement IT solutions with precision and dedication, ensuring compliance with industry standards while delivering reliable and high-value results.
      </span>
      <button className="bg-action mt-2 py-2 px-4 font-medium rounded-full text-white w-max">
        Read more
      </button>
      </div>


        </motion.div>
                              <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.4 }} // Staggers each card
        viewport={{ once: true }}  className="bg-white rounded-xl">
      <img className="rounded-lg mb" src="digitalmarketing.jfif" />
      
      <div className="flex flex-col p-6 gap-1">
      <p className="text-2xl font-semibold">Digital Marketing</p>
      <span>
Deliver digital marketing solutions focused on measurable growth, creative strategy, and seamless execution — helping brands connect, engage, and convert their target audience.
      </span>
      <button className="bg-action mt-2 py-2 px-4 font-medium rounded-full text-white w-max">
        Read more
      </button>
      </div>


        </motion.div>
    </div>
    <section className="px-6 py-16 bg-[#0B0F19] text-white">
        <div className="flex flex-col items-start mb-10">
              <div className="flex flex-col mb- items-start">
        
        {/* Heading text - Bold, Dark Gray, and Tight */}
        <h2 className="text-2xl font-extrabold text-white -950 mb-0.5 tracking-tight">
          Why Choose us
        </h2>
        
        {/* The CUSTOM "Hand-Drawn" Underline Mask */}
        {/* We use width arbitrary values [140px] to match the figma length */}
        <div 
          className="w-[140px] h-[7px] bg-action"
          style={{
            // Apply the custom mask to the background-colored div
            clipPath: 'url(#hand-drawn-stroke)',
            WebkitClipPath: 'url(#hand-drawn-stroke)' // Support for Safari
          }}
        />
        
      </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {features.map((f, i) => (
                          <motion.div 
                          index={i}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.9 }} // Staggers each card
        viewport={{ once: true }} key={i} className="flex relative bg-transparent/30 items-center p-4 rounded-2xl gap-4" 
            
           style={{ 
    // This creates the "Flare" effect in the top right
    background: `linear-gradient(135deg, #ffffff 60%, ${f.color}90 100%)`,
    // This adds the soft blur to the whole card
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(100px)'
  }}>           
  <div
  className="w-12 h-12 absolute -left-5 rounded-xl flex items-center justify-center text-xl shadow-inner"
style={{
background: `linear-gradient(135deg, ${f.color}, ${f.color})`
}}
>
   <Icon icon={f.icon} width="24" height="24" />
</div>
              <div className="w-4">
                </div>
              <div className="text-left">
                <h4 className="font-bold text-" style={{ color: f.color }}>{f.title}</h4>
                <p className="text-[11px] text-gray-800 mt-1">Expert in leading cross-functional teams and delivering results.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.9 }} // Staggers each card
        viewport={{ once: true }}  className="p-6 bg-gray-100">
                      <div className="flex flex-col mb- items-start">
        
        {/* Heading text - Bold, Dark Gray, and Tight */}
        <h2 className="text-2xl font-extrabold text-800 -950 mb-0.5 tracking-tight">
          Testimonials
        </h2>
        
        {/* The CUSTOM "Hand-Drawn" Underline Mask */}
        {/* We use width arbitrary values [140px] to match the figma length */}
        <div 
          className="w-[140px] h-[7px] bg-action"
          style={{
            // Apply the custom mask to the background-colored div
            clipPath: 'url(#hand-drawn-stroke)',
            WebkitClipPath: 'url(#hand-drawn-stroke)' // Support for Safari
          }}
        />

      </div>
      </motion.div>

<div className="overflow-hidden bg-gray-100 pb-8">
  <div
    className="flex transition-transform duration-500"
    style={{ transform: `translateX(-${index * 100}%)` }}
  >
    {testimonials.map((f, i) => (
   <motion.div 
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.9 }} // Staggers each card
        viewport={{ once: true }} key={i}  className="min-w-full bg-gray-50/50 p-6">
  <div className="bg-white relative h-[320px] rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-10 border border-gray-100/50 flex flex-col justify-between overflow-hidden group">
    
    {/* Decorative Background Quote */}
    <span className="absolute top-1 left-8 text-[100px] leading-none text-action font-serif select-none group-hover:text-action/10 transition-colors duration-500">
      &ldquo;
    </span>

    {/* Testimonial Text */}
    <p className="relative mt-4 z-10 text-gray-600 text-lg leading-relaxed font-medium tracking-tight italic">
      {f.text}
    </p>

    {/* Profile Section - The "Floating" Look */}
    <div className="flex items-center gap-4 mt-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
      <div className="relative h-14 w-14 p-1 rounded-2xl bg-gradient-to-tr from-action to-emerald-200">
        <img 
          className="rounded-[14px] w-full h-full object-cover border-2 border-white" 
          src="user.jpg" 
          alt="User"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-[3px] border-white rounded-full"></div>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-[15px] font-bold text-gray-900 tracking-tight">
          Saran Raj
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-md border border-gray-100">
            UI/UX Designer
          </span>
          <div className="h-1 w-1 bg-gray-300 rounded-full"></div>
          <span className="text-[10px] text-action font-semibold uppercase tracking-wider">
            Verified
          </span>
        </div>
      </div>
    </div>
    
    {/* Subtle Progress bar at the bottom */}
    <div className="absolute bottom-0 left-0 h-1 bg-gray-50 w-full">
        <div className="h-full bg-action w-5/6 group-hover:w-full transition-all duration-[3000ms] ease-linear"></div>
    </div>
  </div>
</motion.div>
    ))}
  </div>
</div>
  <div className="bg-[#111827]">
<div className="h-48 flex text-xl rounded-bl-[40px] rounded-br-[40px] font-semibold text-white items-center bg-action px-8">

  <div className="space-y-4 ">
  <span>Ready for faster, cheaper, deeper insights?
</span>
<div className="flex bg-white p-2 rounded-full">
  <input className="w-52 outline-none text-black px-4 text-sm " />
  <button className="text-base px-4 py-2 bg-action rounded-full">
    Subscribe
  </button>
</div>
  </div>


</div>
<div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col"><img className="md:w-24 w-16 h-8" src="logo.png" />
            <span class="font-poppins xs:text-[5px] lg:text-small-size text-white font-bold">
 TECHNO SOLUTIONS PVT LTD
</span>
</div>
<div className="flex text-white flex-col gap-2">
<span className="font-semibold">COMPANY</span>
<span className="text-white/80">About</span>
<span className="text-white/80">Contact</span>
<span className="text-white/80">Terms of Service</span>

</div>
<div className="flex text-white flex-col gap-2">
<span className="font-semibold">PRODUCT</span>
<span className="text-white/80">Features</span>
<span className="text-white/80">Services</span>
<span className="text-white/80">Product</span>
<span className="text-white/80">Updates</span>
</div>
<div className="flex text-white flex-col gap-2">
<span className="font-semibold">REACH OUT</span>
<span className="text-white/80">+91 7200212094</span>
<span className="text-white/80">sadetechnosolutions@gmail.com</span>
<span className="text-white/80">No: 59/8 Madras Building, seshachalam street, Saidapet Chennai - 600015</span>
</div>
<div className="flex items-center justify- gap-4">
<div className="rounded-full p-2.5 bg-white"><Icon icon="ri:facebook-fill" width="24" height="24" /></div>
<div className="rounded-full p-3 bg-white"><Icon icon="prime:twitter" width="20" height="20" /></div>
<div className="rounded-full p-2.5 bg-white"><Icon icon="tdesign:logo-instagram" width="24" height="24" /></div>
<div className="rounded-full p-2.5 bg-white"><Icon icon="basil:linkedin-solid" width="24" height="24" /></div>

</div>

</div>
<div className="w-full h-0.5 bg-white/20">

</div>
<div className="text-white/80 text-sm flex justify-center py-6 text-center">
  Copyright © 2024.  All Rights Reserved.
</div>
</div>
        </>
    )
}

export default Home;