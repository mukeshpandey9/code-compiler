import React from "react";

function Header() {
  return (
    <nav className="bg-slate-950 text-lg text-white font-semibold">
      <div className="flex container  h-16  justify-between items-center  mx-auto ">
        <div className="logo text-3xl font-bold text-slate-400">Code Hell</div>
        <div className="menu">
          <ul className="md:flex gap-10 hidden">
            <li className="hover:text-gray-400">Home</li>
            <li className="hover:text-gray-400">About</li>
            <li className="hover:text-gray-400">Contact</li>
          </ul>
        </div>
        <div>
          <a
            href="https://github.com/mukeshpandey9"
            target="_blank"
            className="border border-white rounded-md px-4 p-2 h-10 hover:bg-green-600"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
