import React, { useState } from 'react';
import MedicalCarousel from "./carousel";
import doctorImg from '../assets/doctor.jpg';

// Dropdown menu data (same for all links for demo)
const dropdownLinks = {
    // Home,
    Resources: [
        { name: "Articles", path: "#" },
        { name: "Videos", path: "#" },
        { name: "Self-Help Tools", path: "#" },
    ],
    Counsellors: [
        { name: "Book Session", path: "#" },
        { name: "My Counsellors", path: "#" },
        { name: "History", path: "#" }
    ],
    Forum: [
        { name: "Discussions", path: "#" },
        { name: "Q & A", path: "#" },
        { name: "Peer Group", path: "#" },
    ],
    Appointments: [
        { name: "Upcoming", path: "#" },
        { name: "Past", path: "#" },
        { name: "Reschedule", path: "#" }
    ]
};

const navLinks = Object.keys(dropdownLinks);

// Tagline Banner
const TaglineBanner = () => (
    <div className="bg-[#07444b] flex items-center justify-center py-3 px-4 w-fit self-end mt-0 rounded-none mr-0">
        <span className="text-white font-bold text-base sm:text-lg ml-8">
            We 💚 To Care our
        </span>
        <span className="text-[#13eec7] font-bold text-base sm:text-lg ml-2 mr-30">
            Patients !
        </span>
    </div>
);


const LandingPage = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
    const [dropdownHover, setDropdownHover] = useState(false);

    // Dropdown handlers
    const handleDropdownMouseEnter = (link) => setOpenDropdown(link);
    const handleDropdownMouseLeave = () => {
        setTimeout(() => {
            if (!dropdownHover) {
                setOpenDropdown(null);
                setActiveDropdownIndex(null);
            }
        }, 50);
    };
    const handleDropdownItemHover = (idx) => setActiveDropdownIndex(idx);
    const handleDropdownEnter = () => setDropdownHover(true);
    const handleDropdownLeave = () => {
        setDropdownHover(false);
        setOpenDropdown(null);
        setActiveDropdownIndex(null);
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-white border-b border-teal-100 z-50 px-4 sm:px-8 py-3 flex items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-[#093a4a] ml-0 sm:ml-10">PsyCare</span>
                </div>
                <div className="ml-auto flex items-center gap-6 sm:gap-10">
                    <div className="hidden md:flex gap-6 sm:gap-10 items-center">
                        {navLinks.map(link => (
                            <div
                                key={link}
                                className="relative flex flex-col items-center"
                                onMouseEnter={() => handleDropdownMouseEnter(link)}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <a
                                    href="#"
                                    className={`text-base sm:text-lg font-semibold transition-colors
                    ${openDropdown === link ? 'text-[#13eec7]' : 'text-[#093a4a]'}
                    hover:text-[#13eec7] group
                  `}
                                >
                                    {link}
                                </a>
                                <span className={`absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center transition-all
                  ${openDropdown === link ? 'opacity-100' : 'opacity-0'}`}>
                                    <span className="w-0.5 h-4 bg-[#13eec7]"></span>
                                    <span className="w-3 h-3 bg-[#13eec7] rounded-full"></span>
                                </span>
                                {openDropdown === link && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 min-w-[200px] sm:min-w-[240px] bg-white shadow-lg border border-teal-100 rounded-lg mt-3 z-50 flex flex-col"
                                        onMouseEnter={handleDropdownEnter}
                                        onMouseLeave={handleDropdownLeave}
                                    >
                                        {dropdownLinks[link].map((item, idx) => (
                                            <a
                                                key={item.name}
                                                href={item.path}
                                                className={`
                          block px-6 py-3 text-gray-700 text-left w-full cursor-pointer transition
                          ${activeDropdownIndex === idx ? 'bg-[#13eec7] text-white font-semibold' : 'hover:bg-[#13eec7] hover:text-white'}
                        `}
                                                onMouseEnter={() => handleDropdownItemHover(idx)}
                                                onMouseLeave={() => setActiveDropdownIndex(null)}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center gap-5 sm:gap-6">
                        <button className="relative">
                            <svg className="w-6 h-6 text-[#0d3747]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="8" strokeWidth="2"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
                            </svg>
                        </button>
                        <div className="relative">
                            <svg className="w-6 h-6 text-[#0d3747]" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeWidth="2"></path>
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                            </svg>
                            <span className="absolute top-[-8px] right-[-8px] bg-[#13eec7] text-white text-xs rounded-full px-2">0</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full flex justify-center pt-15">
                <MedicalCarousel />
            </div>
            {/* Main Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center pt-32 pb-10 lg:pt-40 lg:pb-16 px-4 w-full max-w-[1200px] mx-auto ml-40">
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-8 lg:mb-0">
                    <h2 className="text-base font-semibold text-[#6da7a7] uppercase tracking-wide mb-2 text-center lg:text-left">
                        Digital Mental Health
                    </h2>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#093a4a] mb-6 leading-tight text-center lg:text-left">
                        Enhancing Psychological<br />Support for Students
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg mb-8 text-center lg:text-left max-w-xl">
                        Our platform delivers digital support systems tailored for higher education students. We combine expert guidance, peer interaction, and private, digital-first mental health tools, helping students manage their stress and thrive in academic life.
                    </p>
                    <div className="w-full flex flex-col">
                        <h3 className="text-lg sm:text-xl font-bold text-[#093a4a] mb-3 text-center lg:text-left">
                            Platform Highlights
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Real-time Chat Support
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Group Counseling Sessions
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Wellness Progress Tracker
                                </li>
                            </ul>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Book Private Appointments
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Digital Resource Library
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-2 text-[#13eec7] font-bold text-lg">✓</span>Anonymous Discussion Forums
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mt-2">
                            <button className="px-7 py-2 border-2 border-[#07444b] text-[#093a4a] font-medium rounded-md hover: bg-[#07444b] hover: text-white transition-all">
                                View More
                            </button>
                            <button className="px-7 py-2 bg-[#13eec7] text-[#093a4a] font-semibold rounded-md hover:bg-[#10c5a0] transition-all mt-4 sm:mt-0">
                                Contact Us!
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right: Doctor Image + Tagline Banner */}
                <div className="w-full lg:w-1/2 flex flex-col items-end justify-center relative">
                    <img
                        src={doctorImg}
                        alt="Doctor"
                        className="max-w-full h-auto object-cover block"
                    />
                    <div className="w-full flex justify-end">
                        <TaglineBanner />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
