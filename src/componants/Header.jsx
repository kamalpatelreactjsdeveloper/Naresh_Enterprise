import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../image/logo.png';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    useEffect(() => {
        if (isNavActive) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isNavActive]);

    const toggleNavbar = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header className="bg-white">
            <div className=" mx-auto px-4">
                <div className="flex xs:block justify-between  items-center">
                    <div className="flex   xs:w-full xs:justify-between items-center">
                        <img src={Logo} alt="Naresh Enterprises Logo" className="max-w-[188px] 3xl:max-w-[236px] 3xl:h-100px 3xl:ml-8 3xl:mt-4 mt-2" />
                        <button
                            id="navbarToggle"
                            className="ml-4 md:hidden"
                            type="button"
                            onClick={toggleNavbar}
                            aria-controls="navbarNav"
                            aria-expanded={isNavActive}
                            aria-label="Toggle navigation"
                        >
                            <span className="block w-8 h-0.5 bg-black mb-1"></span>
                            <span className="block w-8 h-0.5 bg-black mb-1"></span>
                            <span className="block w-8 h-0.5 bg-black"></span>
                        </button>
                    </div>
                    <nav className=" md:block">
                        <div className={`h-24  xs:h-[100vh]  md:h-8 md:flex md:items-center md:gap-4 ${isNavActive ? 'block' : 'hidden'}`} id="navbarNav">
                            <ul className="flex flex-col 3xl:gap-8 xl:gap-[10px] lg:gap-[10px] md:gap-[10px]  xs:gap-7 xs:mt-6 md:flex-row md:ml-auto items-center">
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2  xl:pt-20 3xl:text-3xl xl:text-lg pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px] hover:bg-[#005477] hover:text-white md:pt-9 " href="#home">HOME</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2   xl:pt-20 xl:text-lg 3xl:text-3xl pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px] hover:bg-[#005477]  hover:text-white  md:pt-9 " href="#about">ABOUT US</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2  xl:pt-20 xl:text-lg 3xl:text-3xl pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px] hover:bg-[#005477]  hover:text-white  md:pt-9 " href="#products">PRODUCTS</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2  xl:pt-20 xl:text-lg 3xl:text-3xl pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px]  hover:bg-[#005477]  hover:text-white md:pt-9 " href="#rmc">RMC</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2  xl:pt-20 xl:text-lg 3xl:text-3xl pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px]  hover:bg-[#005477]  hover:text-white md:pt-9 " href="#quality">QUALITY</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className="nav-link custom-icon text-black py-2  xl:pt-20 xl:text-lg 3xl:text-3xl  pb-3 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs  md:pt-9 xs:p-[10px] contact-us bg-[#005477]  hover:text-white xs:text-white !impotant  text-white" href="#contact">CONTACT US</a>
                                </li>
                                <li className="nav-item 3xl:pt-[60px]">
                                    <a className=" 	display: block nav-link custom-icon text-black py-2 3xl:pt-[75px] 3xl:mb-[50px]  xl:pt-[43px] xl:mb-[19px] lg:pt-[41px] lg:mb-[20px]   pb-3 3xl:text-3xl 3xl:px-4 xl:px-4 lg:px-3 md:px-2 md:text-xs xs:p-[10px] hover:bg-[#005477]  hover:text-white  md:pt-[40px] md:mb-[21px] " href="#search"><FaSearch /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
