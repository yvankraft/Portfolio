import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="flex justify-center relative z-10">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        whileHover={{ scale: 1.1 }}
        className="nav flex justify-evenly p-2 text-slate-800 rounded-2xl bg-white shadow-lg w-[50%]"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 p-1 rounded-2xl w-auto text-white flex items-center justify-center"
              : "flex items-center justify-center p-1 rounded-2xl w-auto hover:bg-slate-100 active:bg-slate-700 active:duration-0 duration-1000 active:text-white transition-colors"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/comming-soon"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 p-1 rounded-2xl w-auto text-white flex items-center justify-center"
              : "flex items-center justify-center p-1 rounded-2xl w-auto hover:bg-slate-100 active:bg-slate-700 active:duration-0 duration-1000 active:text-white transition-colors"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 p-1 rounded-2xl w-auto text-white flex items-center justify-center"
              : "flex items-center justify-center p-1 rounded-2xl w-auto hover:bg-slate-100 active:bg-slate-700 active:duration-0 duration-1000 active:text-white transition-colors"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/comming-soon"
          className={({ isActive }) =>
            isActive
              ? "bg-slate-500 p-1 rounded-2xl w-auto text-white flex items-center justify-center"
              : "flex items-center justify-center p-1 rounded-2xl w-auto hover:bg-slate-100 active:bg-slate-700 active:duration-0 duration-1000 active:text-white transition-colors"
          }
        >
          Contact
        </NavLink>
      </motion.div>
    </div>
  );
};

export default Navbar;
