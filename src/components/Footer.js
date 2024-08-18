import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2024 Farhan Adi Saputra. All Rights Reserved.</p>
      <ul className="mt-4 flex justify-center space-x-4">
        <li>
          <a
            href="https://github.com/farhanhunter"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/farhan-adi-saputra-359732206/"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
        </li>
        {/* Add more social links as needed */}
      </ul>
    </footer>
  );
}

export default Footer;
