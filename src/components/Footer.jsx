function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-blue-400">
              Contact Us
            </h3>
            <p>Email: info@scholarlywritershub.com</p>
            <p>Phone: +91 8240046149</p>
            <p>Alt Phone: +91 983812455</p>
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul>
              <li>
                <a
                  href="#services"
                  className="hover:text-pink-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-pink-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-blue-400">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-pink-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Scholarly Writers Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
