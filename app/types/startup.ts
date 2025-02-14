export type Autor = {
  _id: number;
  name: string;
};

export type Category = {
  _id: number;
  name: string;
};

export type StartupType = {
  _id: number;
  title: string;
  views: number;
  _createAt: Date;
  author: Autor;
  description: string;
  category: Category;
  image: string;
};
