export const posts = [
  {
    _id: 1,
    title: "Startup 1",
    views: 55,
    _createAt: new Date(),
    author: { _id: 1, name: "John Doe" },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Nullam in purus nec nulla lacinia sollicitudin. Nullam in purus nec nulla lacinia sollicitudin.",
    category: { _id: 1, name: "Technology" },
    image:
      "https://th.bing.com/th/id/OIP.adWM0bAA_fOk5xUyFu-CGgHaFj?rs=1&pid=ImgDetMain",
  },
  {
    _id: 2,
    title: "Startup 2",
    views: 55,
    _createAt: new Date(),

    author: { _id: 2, name: "Jane Doe" },
    description:
      "Suspendisse potenti. Ut in ligula fringilla, venenatis eros at, malesuada ex.",
    category: { _id: 2, name: "Health" },
    image:
      "https://th.bing.com/th/id/OIP.adWM0bAA_fOk5xUyFu-CGgHaFj?rs=1&pid=ImgDetMain",
  },
  {
    _id: 3,
    title: "Startup 3",
    views: 55,
    _createAt: new Date(),
    author: { _id: 3, name: "Alex Smith" },
    description: "Description for Startup 3.",
    category: { _id: 3, name: "Finance" },
    image: "https://www.doonamis.com/wp-content/uploads/2022/07/startup.jpg",
  },
  {
    _id: 4,
    title: "Startup 4",
    views: 55,
    _createAt: new Date(),
    author: { _id: 4, name: "Emily Johnson" },
    description: "Description for Startup 4.",
    category: { _id: 4, name: "Education" },
    image:
      "https://www.impulsa-empresa.es/wp-content/uploads/2023/12/Termino-diccionario_Startup.jpg",
  },
];
