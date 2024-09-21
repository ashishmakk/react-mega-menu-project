import {
  Fa500Px,
  FaAccusoft,
  FaAdversal,
  FaAvianex,
  FaBitcoin,
  FaBtc,
  FaCodiepie,
  FaDocker,
  FaGithubSquare,
} from "react-icons/fa";
import { nanoid } from "nanoid";

import img1 from "./assets/m2.jpg";
import img2 from "./assets/m3.jpg";
import img3 from "./assets/m4.jpg";
import img4 from "./assets/m5.jpg";
import img5 from "./assets/m6.jpg";
import img6 from "./assets/m7.jpg";
import img7 from "./assets/m8.jpg";
import img8 from "./assets/m9.jpg";
import img9 from "./assets/m3.jpg";
import img10 from "./assets/m10.jpg";

const data = [
  {
    pageId: nanoid(),
    page: "asia",
    links: [
      {
        id: nanoid(),
        label: "japan",
        icon: <Fa500Px />,
        img: img10,
      },
      {
        id: nanoid(),
        label: "singapore",
        icon: <FaAccusoft />,
        img: img9,
      },
      {
        id: nanoid(),
        label: "malaysia",
        icon: <FaAdversal />,
        img: img8,
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "australia",
    links: [
      {
        id: nanoid(),
        label: "melbourne",
        icon: <FaAvianex />,
        img: img7,
      },
      {
        id: nanoid(),
        label: "sydney",
        icon: <FaBitcoin />,
        img: img6,
      },
      {
        id: nanoid(),
        label: "gold coast",
        icon: <FaBtc />,
        img: img5,
      },
      {
        id: nanoid(),
        label: "adelaide",
        icon: <FaCodiepie />,
        img: img4,
      },
    ],
  },
  {
    page: "europe",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "france",
        icon: <FaDocker />,
        img: img3,
      },
      {
        id: nanoid(),
        label: "spain",
        icon: <FaGithubSquare />,
        img: img2,
      },
      {
        id: nanoid(),
        label: "italy",
        icon: <FaAccusoft />,
        img: img1,
      },
      {
        id: nanoid(),
        label: "switzerland",
        icon: <Fa500Px />,
        img: img10,
      },
      {
        id: nanoid(),
        label: "germany",
        icon: <FaAdversal />,
        img: img9,
      },
      {
        id: nanoid(),
        label: "netherlands",
        icon: <FaCodiepie />,
        img: img8,
      },
      {
        id: nanoid(),
        label: "portugal",
        icon: <FaAvianex />,
        img: img7,
      },
      {
        id: nanoid(),
        label: "serbia",
        icon: <FaAccusoft />,
        img: img6,
      },
    ],
  },
];

export default data;
