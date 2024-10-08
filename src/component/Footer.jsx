import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer(){
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto ">
      <div className="container mx-auto text-center md:text-center">
        <h4 className="text-xl mb-2">Contact Information</h4>
        <div className="flex justify-center md:justify-center space-x-4">
          <a href="https://instagram.com/kubsamelkamu" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500" />
          </a>
          <a href="https://linkedin.com/in/kubsa-melkamu-519bb5263" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
          <a href="https://github.com/kubsamelkamu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500" />
          </a>
        </div>
        <p className="mt-4">Email: <a href="mailto:kubsamlkm@gmail.com" className="underline">Kubsamlkm@gmail.com</a></p>
      </div>
    </footer>
  );
};


export default Footer;
