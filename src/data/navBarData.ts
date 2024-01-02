const navbarData = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    dropdown: null,
  },
  {
    id: 2,
    title: "Projets",
    path: "#",
    dropdown: [
      {
        title: "Développement Web",
        path: "/dev",
      },
      {
        title: "Conception Design (UI/UX)",
        path: "/ui-ux",
      },
    ],
  },
  {
    id: 3,
    title: "À Propos",
    path: "/about",
    dropdown: null,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    dropdown: null,
  },
];

export default navbarData;
