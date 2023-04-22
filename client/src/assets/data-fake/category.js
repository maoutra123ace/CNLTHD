// const category = [
//   // {
//   //   id:0,
//   //   display: "Hãng Dell",
//   //   category: "Dell",
//   //   icon: "laptop",
//   //   type: "",
//   //   children: [
//   //       {
//   //         displaychild: "Macbook air M1",
//   //       },
//   //       {
//   //         displaychild: "Macbook air M2",
//   //       },
//   //       {
//   //         displaychild: "Macbook pro M1",
//   //       },
//   //       {
//   //         displaychild: "Macbook pRO M2",
//   //       },
//   //     ],
//   // },
//   {
//     id:1,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook air M2",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook pro M1",
//         categoryslug:"macbook"
//       },
//       {
//         displaychild: "Macbook pRO M2",
//         categoryslug:"macbook"
//       },
//     ],
//   },
//   {
//     id:22,
//     display: "Hãng MSI",
//     category: "MSI",
//     icon: "laptop",
//     type: "",
//     children: [
//       {
//         displaychild: "Laptop MSI",
//         categoryslug:"Msi-modern"
//       },
//       {
//         displaychild: "Macbook air M2",
//         categoryslug:"Msi-modern1"
//       },
//       {
//         displaychild: "Macbook pro M1",
//         categoryslug:"Msi-modern2"
//       },
//       {
//         displaychild: "Macbook pRO M2",
//         categoryslug:"Msi-modern3"
//       },
//     ],
//   },
//   {
//     id:3,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   },
//   {
//     id:4,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   },
//   {
//     id:5,
//     display: "Hãng Apple",
//     category: "Apple",
//     icon: "apple",
//     type: "logo",
//     children: [
//       {
//         displaychild: "Macbook air M1",
//       },
//       {
//         displaychild: "Macbook air M2",
//       },
//       {
//         displaychild: "Macbook pro M1",
//       },
//       {
//         displaychild: "Macbook pRO M2",
//       },
//     ],
//   }
// ];
// export default category;
import { LaptopOutlined, AppleOutlined } from "@ant-design/icons";

const items = [
  {
    key: "1",
    label: "Hãng MSI",
    icon: <LaptopOutlined />,
    type: "",
    category: "MSI",
    children: [
      {
        label: "Laptop MSI Modern",
        key: "MSImodernreal",
        categoryslug: "Msi-modern",
      },
      {
        label: "Laptop MSI Katana",
        key: "MSImodern",
        categoryslug: "Msi-katana",
      },
      {
        label: "Laptop MSI",
        key: "MSImodernkatana",
        categoryslug: "Laptop MSI",
      },
    ],
  },
  {
    key: "2",
    label: "Hãng Apple",
    icon: <AppleOutlined />,
    category: "Apple",
    children: [
      {
        label: "Macbook Pro M1",
        key: "AppleMacPro",
        categoryslug: "MacbookPRO",
      },
      {
        label: "Macbook Pro M2",
        key: "AppleMac Pro M2",
        categoryslug: "Laptop MSI",
      },
      {
        label: "Macbook Air",
        key: "AppleMacAir",
        categoryslug: "Laptop MSI",
      },
    ],
  },
  {
    key: "4",
    label: "Hãng Apple",
    icon: <AppleOutlined />,
    category: "Apple",
    children: [
      {
        label: "Macbook",
        key: "AppleMacPro",
        categoryslug: "Msi-modern",
      },
      {
        label: "Macbook",
        key: "AppleMacProm2",
        categoryslug: "Laptop MSI",
      },
      {
        label: "Macbook",
        key: "AppleMacProm3",
        categoryslug: "Laptop MSI",
      },
    ],
  },
  {
    key: "3",
    label: "Hãng Apple",
    icon: <AppleOutlined />,
    category: "Apple",
    children: [
      {
        label: "Macbook",
        key: "AppleMacPro",
        categoryslug: "Msi-modern",
      },
      {
        label: "Macbook",
        key: "AppleMacProm2",
        categoryslug: "Laptop MSI",
      },
      {
        label: "Macbook",
        key: "AppleMacProm3",
        categoryslug: "Laptop MSI",
      },
    ],
  },
];
export default items;
