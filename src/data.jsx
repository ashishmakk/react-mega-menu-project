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

const data = [
  {
    pageId: nanoid(),
    page: "product",
    links: [
      {
        id: nanoid(),
        label: "community",
        icon: <Fa500Px />,
      },
      {
        id: nanoid(),
        label: "content",
        icon: <FaAccusoft />,
      },
      {
        id: nanoid(),
        label: "roles",
        icon: <FaAdversal />,
      },
    ],
  },
  {
    pageId: nanoid(),
    page: "solutions",
    links: [
      {
        id: nanoid(),
        label: "developers",
        icon: <FaAvianex />,
      },
      {
        id: nanoid(),
        label: "content managers",
        icon: <FaBitcoin />,
      },
      {
        id: nanoid(),
        label: "business teams",
        icon: <FaBtc />,
      },
      {
        id: nanoid(),
        label: "ecommerce",
        icon: <FaCodiepie />,
      },
    ],
  },
  {
    page: "resources",
    pageId: nanoid(),
    links: [
      {
        id: nanoid(),
        label: "starters",
        icon: <FaDocker />,
      },
      {
        id: nanoid(),
        label: "showcase",
        icon: <FaGithubSquare />,
      },
    ],
  },
];

export default data;
