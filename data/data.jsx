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
    value: 0,
    label: "Mainnet",
  },
  {
    value: 1,
    label: "Testnet",
  },
];

export const networkStatus = [
  {
    value: 0,
    label: "Stake Now",
  },
  {
    value: 1,
    label: "Soon",
  },
];
