import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center md:text-left">
        <h4 className="text-xl mb-2">Contact Information</h4>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700" />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-500" />
          </a>
        </div>
        <p className="mt-4">Email: <a href="mailto:youremail@example.com" className="underline">youremail@example.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
