function Header() {
  return (
    <header className="bg-gray-800 shadow-sm">
      <div className="container mx-auto px-2 py-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-4xl font-heading font-bold text-blue-500">
          Scholarly Writer's Hub
        </h1>
        <nav className="p-2">
          <ul className="flex space-x-6">
            <li>
              <a
                href="#services"
                className="text-white hover:text-blue-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-white hover:text-blue-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className=" text-white hover:text-blue-400 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
