import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import Links from "../links/Links";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="p-5 bg-gray-200">
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open === true ? (
          <MdClose className="text-2xl "></MdClose>
        ) : (
          <HiMenuAlt1 className="text-2xl "></HiMenuAlt1>
        )}
      </button>
      <ul
        className={`md:flex justify-center items-center gap-10 absolute md:static bg-gray-200 p-5 rounded-lg duration-150 ${
          open === true ? "top-16" : "-top-40 "
        }`}
      >
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
