import { BsCodeSquare } from "react-icons/bs";
import { SiMaterialdesign } from "react-icons/si";
import { BiMobileVibration } from "react-icons/bi";
const iconStyle = (Icon) => <Icon size="1.5rem" color="#000" />;

export const servicesData = [
  {
    icon: iconStyle(BsCodeSquare),
    title: "Web Development",
    desc:
      "For 10+ years now, we’ve mastered the top web technologies to deliver projects that have raked in investments. A trusted market leader in developing high performing web fronts for every business.",
    link: "EXPLORE",
  },
  {
    icon: iconStyle(SiMaterialdesign),
    title: "Website Design",
    desc:
      "We not only keep up with the ‘design trends’ but focus on users, which makes our services the most fruitful in the entire market. Delivering excellence since 2010.",
    link: "LEARN MORE",
  },
  {
    icon: iconStyle(BiMobileVibration),
    title: "Mobile App Development",
    desc:
      "We build mobile apps that are loved by users. Taking the benefits of Artificial intelligence, ML, IoT and other high-end technologies to create app masterpiece that sustains.",
    link: "EXPLORE",
  },
];
