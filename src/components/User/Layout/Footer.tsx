import { FaTwitter, FaFacebook, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'; // Import social media icons from react-icons library

function Footer() {
  return (
    <footer className="bg-slate-50 text-black py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center mb-8">
          {/* Footer links */}
          <a href="/contact" className="flex items-center text-black hover:text-gray-400 mr-6"><FaEnvelope className="mr-2" /> Contact Us</a>
          <a href="/about" className="flex items-center text-black hover:text-gray-400"><FaPhone className="mr-2" /> About Us</a>
        </div>
        <div className="flex items-center justify-center mb-8">
          {/* Professional Sections */}
          <div className="mx-8">
            <h3>Services</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="mx-8">
            <h3>Portfolio</h3>
            <p>Curabitur tempus tellus sit amet felis fringilla.</p>
          </div>
          <div className="mx-8">
            <h3>Testimonials</h3>
            <p>Nulla facilisi. Integer malesuada lacinia velit.</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* Social media icons */}
          <a href="https://twitter.com" className="text-black hover:text-gray-400 mr-4"><FaTwitter /></a>
          <a href="https://facebook.com" className="text-black hover:text-gray-400 mr-4"><FaFacebook /></a>
          <a href="https://linkedin.com" className="text-black hover:text-gray-400"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
