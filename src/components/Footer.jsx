import logo from "../assets/elits.svg";
import {
  RiMapPinFill,
  RiFacebookCircleFill,
  RiMailLine,
  RiPhoneFill,
  RiCalendarLine,
  RiFileListLine,
  RiAccountBoxLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#3D4243] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 md:grid-cols-3 gap-4">
        {/* Contact Us Section */}
        <div className="space-y-2">
          <h4 className="font-bold">Contact Us</h4>
          <ul className="list-none space-y-1">
            <li className="flex items-center">
              <RiMapPinFill className="h-6 w-6 mr-2 fill-current" />
              <span>
                Department of Information Technology, College of Engineering and
                information technology
              </span>
            </li>
            <li className="flex items-center">
              <RiFacebookCircleFill className="mr-2 h-4 w-4" />
              <a href="https://www.facebook.com/CvSUELITS">
                CVSU Elite League of Information Technology Students
              </a>
            </li>
            <li className="flex items-center">
              <RiMailLine className="mr-2 h-4 w-4" />
              <a href="mailto:elits.cvsu@gmail.com">elits.cvsu@gmail.com</a>
            </li>
            <li className="flex items-center">
              <RiPhoneFill className="mr-2 h-4 w-4" />
              <a href="tel:+639123456789">+63 912 345 6789</a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-2">
          <h4 className="font-bold">Quick Links</h4>
          <ul className="list-none space-y-1">
            <li className="flex items-center">
              <RiFileListLine className="mr-2" />
              <a href="https://myportal.cvsu.edu.ph">Student Portal</a>
            </li>
            <li className="flex items-center">
              <RiAccountBoxLine className="mr-2" />
              <a href="https://registrar.cvsu.edu.ph">
                List of Enrolled Students
              </a>
            </li>
            <li className="flex items-center">
              <RiCalendarLine className="mr-2" />
              <a href="https://cvsu.edu.ph/university-calendar/">
                University Calendar
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <ul className="list-none space-y-2">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Credits</a>
            </li>
            <li>
              <a href="#">Copyright</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Elite League of Information
          Technology Students. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
