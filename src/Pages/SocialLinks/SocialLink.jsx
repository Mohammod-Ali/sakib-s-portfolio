import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLink = () => {
  return (
    <div className="flex flex-col md:top-[30%] left-0 fixed top-[70%] z-10">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.linkedin.com/in/shaharul-islam-sakib-888037213/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="flex justify-between items-center w-full text-white"
            target={"_blank"}
            rel="noreferrer"
          >
            <>
              LinkedIn <FaLinkedin size={30}></FaLinkedin>
            </>
          </a>
        </li>

        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.facebook.com/shaharulislam.sakib"
            className="flex justify-between items-center w-full text-white"
            target={"_blank"}
            rel="noreferrer"
          >
            <>
              FaceBook <FaFacebook size={30}></FaFacebook>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://www.instagram.com/shaharulislamsakib?igsh=dmJ2eWZzeHZkbDlo"
            className="flex justify-between items-center w-full text-white"
            target={"_blank"}
            rel="noreferrer"
          >
            <>
              Instagram <FaInstagram size={30}></FaInstagram>
            </>
          </a>
        </li>
        <li className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href="https://wa.me/+8801909372038"
            className="flex justify-between items-center w-full text-white"
            target={"_blank"}
            rel="noreferrer"
          >
            <>
              WhatsApp <FaWhatsapp size={30}></FaWhatsapp>
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLink;
