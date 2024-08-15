import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const social = [
  { icon: <FaGithub />, path: "https://github.com/Aldhaf" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/aldhaf-fadlilah/",
  },
  { icon: <FaInstagram />, path: "https://www.instagram.com/aldhaffdl_/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
