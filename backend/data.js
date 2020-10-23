import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Tim",
      email: "t@gmail.com",
      password: bcrypt.hashSync("123", 8),
      isAdmin: true,
    },
    {
      name: "Jon",
      email: "b@gmail.com",
      password: bcrypt.hashSync("123", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike slim shirt",
      category: "Shirt",
      image: "/images/p1.jpg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 2.5,
      numReviews: 10,
      description: "Slim shirt design",
    },
    {
      name: "Adidas slim shirt",
      category: "Shirt",
      image: "/images/p2.jpg",
      price: 60,
      countInStock: 20,
      brand: "Nike",
      rating: 4,
      numReviews: 10,
      description: "Slim shirt design",
    },
    {
      name: "H&M slim shirt",
      category: "Shirt",
      image: "/images/p3.jpg",
      price: 50,
      countInStock: 0,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Slim shirt design",
    },
    {
      name: "Nike slim pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 120,
      countInStock: 4,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Slim shirt design",
    },
    {
      name: "Puma pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 120,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Slim shirt design",
    },
    {
      name: "Adidas fit pants",
      category: "Pants",
      image: "/images/p6.jpg",
      price: 20,
      countInStock: 2,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 5,
      description: "Slim shirt design",
    },
  ],
};

export default data;
