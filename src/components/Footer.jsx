import logo from "../assets/elits.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <h4 className="font-bold">Contact US</h4>
          <li>
            <i className="ri-map-pin-fill text-white mr-2"></i>
            <span>
              Department of Information Technology, College of Engineering and
              Information Technology, Cavite State University - Don Severino de
              las Alas Campus
            </span>
          </li>
          <li>
            <a className="hyperlink" href="https://www.facebook.com/CvSUELITS">
              <i className="ri-facebook-circle-fill text-white mr-2"></i>
              <span>CVSU Elite League of Information Technology Students </span>
            </a>
          </li>
          <li>
            <a className="hyperlink">
              <i className="ri-mail-line text-white mr-2"></i>
              <span>elits.cvsu@gmail.com</span>
            </a>
          </li>
          <li>
            <a className="hyperlink">
              <i className="ri-phone-fill text-white mr-2"></i>
              <span>+63 912 345 6789</span>
            </a>
          </li>
        </div>
        <div className="space-y-2">
          <h4 className="font-bold">Quick Links</h4>
          <li>
            <i className="ri-file-list-line text-white mr-2"></i>
            <a href="https://myportal.cvsu.edu.ph">Student Portal</a>
          </li>
          <li>
            <i className="ri-account-box-line text-white mr-2"></i>
            <a href="https://registrar.cvsu.edu.ph">
              List of Enrolled Students
            </a>
          </li>
          <li>
            <i className="ri-calendar-line text-white mr-2"></i>
            <a href="https://cvsu.edu.ph/university-calendar/">
              University Calendar
            </a>
          </li>
        </div>
        <div className="space-y-2">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Credits</li>
          <li>Copyright</li>
        </div>
      </div>
      <div className="container mx-auto py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Elite League of Information
          Technology Students. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
