export type MenuRedirection = {
  label: string;
  uri: string;
};

export const menuList: MenuRedirection[] = [
  {
    label: "Inicio",
    uri: "/",
  },
  {
    label: "Productos",
    uri: "/productos",
  },
  {
    label: "Nosotros",
    uri: "/nosotros",
  },
  //   {
  //     label: "Categorías",
  //     uri: "/categorias",
  //   },
  {
    label: "Contacto",
    uri: "/contacto",
  },
];
