/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function CustomLink({ to, onClick, ...props }) {
	return (
		<li>
			<NavLink className='relative cursor-pointer flex p-2 items-center font-bold text-yellow-900 hover:text-yellow-700 hover:bg-white/50 transition-colors duration-500 ease-in-out' to={to} onClick={onClick} {...props}></NavLink>
		</li>
	);
}
const logo_url = "https://upload.wikimedia.org/wikipedia/commons/c/cd/Vincent_Van_Gogh_Signature.svg";
const navigation_data = [
	{ name: "Home", link: "/" },
	{ name: "Letters", link: "/Letters" },
	{ name: "Paintings", link: "/Paintings" },
	{ name: "Museum", link: "/Museum" },
	{ name: "Contact", link: "/Contact" }
];
// useRef gives us a reference to an HTML element in the dom.
//<div ref={dropdownRef} className='absolute top-full left-0 w-full bg-yellow-300 shadow-md md:hidden'>
// It can also be used like useState without causing re-renders. So if you wanna check how many renders
// are being caused by useState, you cannot use a useState to track the value (because it persists but it also causes another render because it persists in an updated state). Since useRef also persists but does not cause re-render we can use it to count re-renders or access dom elements.
// https://www.w3schools.com/react/react_useref.asp
// https://dev.to/michael_osas/understanding-react-hooks-how-to-use-useref-usememo-and-usecallback-for-more-efficient-code-3ceh
// console.log("ref: ", dropdownRef);
// console.log("event.target: ", event.target);

export default function Navbar() {
	const dropdownRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	// useEffect to add event listener and apply callback

	// 	useEffect(() => {
	// 		const outsideClickHandler = (event) => {
	// 			console.log("outsideClickHandler function");
	// 			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
	// 				closeMenu();
	// 				console.log("tried to close"); // not logged
	// 			}
	// 		};
	// 		console.log("event listener added");
	// 		document.body.addEventListener("click", outsideClickHandler);
	//
	// 		return () => {
	// 			console.log("event listener removed");
	// 			document.body.removeEventListener("click", outsideClickHandler);
	// 		};
	// 	}, [dropdownRef]);

	// more react friendly way to do
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				closeMenu();
			}
		};

		if (menuOpen) {
			document.addEventListener("click", handleOutsideClick);
		} else {
			document.removeEventListener("click", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [menuOpen]);

	// Close menu on link click
	const closeMenu = () => {
		setMenuOpen(false);
	};

	// Toggle menu state
	const toggleMenu = (event) => {
		event.stopPropagation();
		setMenuOpen((prevState) => !prevState);
	};

	return (
		<nav className='sticky top-0 bg-yellow-400 z-10'>
			<div className='flex items-center justify-between'>
				{/* Logo */}
				<Link to='/' className='flex pl-2 items-center gap-2'>
					<img src={logo_url} height='80' alt='Logo' />
				</Link>

				{/* Hamburger Icon */}
				<button className=' md:hidden text-yellow-900 cursor-pointer' onClick={toggleMenu}>
					Menu
					<i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
				</button>

				{/* Desktop Menu */}
				<ul className='hidden md:flex items-center h-full '>
					{navigation_data.map((item, idx) => (
						<CustomLink key={idx} to={item.link}>
							{item.name}
						</CustomLink>
					))}
				</ul>
			</div>

			{/* Mobile Dropdown Menu */}
			{/* USEREF IS HERE-: */}
			{menuOpen && (
				<div ref={dropdownRef} className='absolute top-full left-0 right-2 w-full bg-yellow-200 shadow-md md:hidden'>
					<ul className='flex flex-col items-start p-4 space-y-2'>
						{navigation_data.map((item, idx) => (
							<CustomLink key={idx} to={item.link} onClick={closeMenu}>
								{item.name}
							</CustomLink>
						))}
					</ul>
				</div>
			)}
		</nav>
	);
}
