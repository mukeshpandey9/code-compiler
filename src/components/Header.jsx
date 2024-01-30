import React from "react";

function Header() {
  return (
    <nav className="bg-slate-950 text-lg text-white font-semibold">
      <div className="flex container px-4 md:px-16 h-16  justify-between items-center  mx-auto ">
        <div className="logo text-3xl font-bold text-slate-400">Code Hell</div>
        <h3 className="text-center font-semibold text-green-400">~ By Mukesh Pandey</h3>

        <div className="menu">
          <ul className="md:flex gap-10 hidden">
            <li className="hover:text-gray-400">Home</li>
            <li className="hover:text-gray-400"><a
              href="https://github.com/mukeshpandey9"
              target="_blank"
            >
              About
            </a></li>
            <li className="hover:text-gray-400"><a
              href="https://linkedin.com/in/mukeshpandey9"
              target="_blank"

            >
              Contact
            </a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
