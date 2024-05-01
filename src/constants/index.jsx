import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Anasayfa", icon: <AiFillHome />, type: "home" },
  {
    name: "Trendler",
    icon: <MdLocalFireDepartment />,
    type: "trending",
  },
  {
    name: "Muzik",
    icon: <CgMusicNote />,
    type: "category",
  },
  { name: "Filmler", icon: <FiFilm />, type: "category" },
  { name: "Canli", icon: <MdLiveTv />, type: "category" },
  {
    name: "Oyun",
    icon: <IoGameControllerSharp />,
    type: "category",
  },
  {
    name: "Haberler",
    icon: <ImNewspaper />,
    type: "category",
  },
  {
    name: "Spor",
    icon: <GiDiamondTrophy />,
    type: "category",
  },
  {
    name: "Egitici",
    icon: <RiLightbulbLine />,
    type: "category",
  },
  {
    name: "Guzellik & Kozmetik",
    icon: <GiEclipse />,
    type: "category",
    divider: true,
  },
  { name: "Ayarlar", icon: <FiSettings />, type: "menu" },
  {
    name: "Report History",
    icon: <AiOutlineFlag />,
    type: "menu",
  },
  { name: "Yardim", icon: <FiHelpCircle />, type: "menu" },
  {
    name: "Send feedback",
    icon: <RiFeedbackLine />,
    type: "menu",
  },
];
