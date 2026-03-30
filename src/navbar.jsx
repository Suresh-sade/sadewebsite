import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
     const [openMenu,setOpenMenu] = useState(false)

     const handleMenu = ()=>{
        setOpenMenu(!openMenu)
     }

       const [style, setStyle] = useState({ left:0, width: 44 });

  const handleHover = (e) => {
    const { offsetLeft, offsetWidth } = e.target;
    setStyle({
      left: offsetLeft,
      width: offsetWidth,
    });
  };

const handleLeave = () => {
  const active = document.querySelector(".active-link");
  if (active) {
    setStyle({
      left: active.offsetLeft,
      width: active.offsetWidth,
    });
  }
};

    return (
        <nav className="flex relative top-0 sticky z-10 items-center bg-white justify-between w-full h-20 px-6 lg:px-20">
            <div className="flex flex-col items-center"><img className="md:w-24 w-16 h-8" src="logo.png" />
            <span class="font-poppins xs:text-[5px] lg:text-small-size text-logo font-bold">
 TECHNO SOLUTIONS PVT LTD
</span>
</div>
  <div className="relative xs:hidden lg:flex flex lg:gap-8">
      {["Home", "About", "Services", "Projects", "Contact"].map((item, i) => (
        <NavLink
          key={i}
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
           className={({ isActive }) =>
    isActive ? "relative text-action font-bold active-link" : "relative font-semibold"
  }
        >
          {item}
        </NavLink>
      ))}

      {/* sliding underline */}
      <span
        className="absolute bottom-0 h-[2px] bg-action transition-all duration-300"
        style={{
          left: style.left,
          width: style.width,
        }}
      />
    </div>
            <button className="bg-action xs:hidden lg:block text-sm text-white font-semibold py-2 px-6 rounded-full">
                Free Consulting
            </button>
            <div className="lg:hidden xs:flex flex-col ">
  <Icon 
    onClick={handleMenu} 
    className="w-9 h-9 text-action cursor-pointer" 
    icon="material-symbols:menu-rounded" 
  />
  {openMenu && (
    <div className="absolute right-0 h-screen top-0 w-full max-w-full bg-[#111827] shadow-md border border-gray-200 z-50">
        <div className="flex flex-col gap-6 text-xl">

<div className="flex justify-end p-6">
    <Icon style={{color:'#fff'}} onClick={()=>setOpenMenu(false)} icon="line-md:close" width="24" height="24" />
    </div>
                  <NavLink 
        to="/" 
        className={({ isActive }) => (isActive ? 'text-action px-8 py-0 font-medium' : ' block hover:bg-action font-medium hover:bg-opacity-5  px-8 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about-us" 
        className={({ isActive }) => (isActive ? 'text-action font-medium px-8 py-2 ' : ' block hover:bg-action text-white font-medium hover:bg-opacity-5  px-8 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        About Us
      </NavLink>
      <NavLink 
        to="/services" 
        className={({ isActive }) => (isActive ? 'font-medium text-action px-8 py-2 block  te' : 'font-medium text-white block hover:bg-action hover:bg-opacity-5  px-8 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Services
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => (isActive ? 'font-medium text-action px-8 py-2 block' : 'text-white font-medium block hover:bg-action hover:bg-opacity-5  px-8 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Projects
      </NavLink>
      <NavLink 
        to="/contact-us" 
        className={({ isActive }) => (isActive ? 'font-medium text-action px-8 py-2 block' : 'text-white font-medium block hover:bg-action hover:bg-opacity-5  px-8 py-2')}
        onClick={() => {
          setOpenMenu(false);
          window.scrollTo(0, 0);
        }}
      >
        Contact Us
      </NavLink>

            </div>

    </div>
  )}
</div>


        </nav>
    );
};

export default Navbar;
