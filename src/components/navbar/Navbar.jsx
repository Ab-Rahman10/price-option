import Links from "../links/Links";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/blog", name: "Blog" },
  ];

  return (
    <nav className="pt-5">
      <ul className="md:flex justify-center items-center gap-10">
        {routes.map((route) => (
          <Links route={route}></Links>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
