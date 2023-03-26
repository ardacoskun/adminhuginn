import {
  FaTwitter,
  FaYoutube,
  FaTelegram,
  FaMedium,
  FaDiscord,
} from "react-icons/fa";

export const socialMedia = [
  {
    id: 1,
    link: "https://twitter.com/HuginnStake",
    icon: <FaTwitter />,
    title: "Twitter",
  },
  {
    id: 2,
    link: "https://www.youtube.com/c/HuginnAcademy",
    icon: <FaYoutube />,
    title: "Youtube",
  },
  {
    id: 3,
    link: "https://t.me/HuginnStake",
    icon: <FaTelegram />,
    title: "Telegram",
  },
  {
    id: 4,
    link: "https://blog.huginn.tech/",
    icon: <FaMedium />,
    title: "Blog",
  },
  {
    id: 5,
    link: "https://discord.com/invite/huginn",
    icon: <FaDiscord />,
    title: "Discord",
  },
];

export const enviromentData = [
  {
    id: 1,
    value: 0,
    name: "Mainnet",
  },
  {
    id: 2,
    value: 1,
    name: "Testnet",
  },
];

export const networkStatus = [
  {
    id: 1,
    value: 0,
    name: "Stake Now",
  },
  {
    id: 2,
    value: 1,
    name: "Soon",
  },
];
