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
      // _id: "1",
      name: "Inflite CF SLX 9.0 Race",
      category: "Road",
      image: "/images/inflight.png",
      price: 1999.0,
      countInStock: 10,
      brand: "Canyon",
      rating: 2.5,
      numReviews: 10,
      description:
        "The top dog in the Inflite CF SL family, the carbon frame is equipped with a full SRAM Force CX1 groupset, carbon wheels and our own H31 Ergocockpit CF bar and stem combo. This setup is rapid.",
    },
    {
      // _id: "2",
      name: "Grail 7",
      category: "Road",
      image: "/images/Grail.png",
      price: 3299,
      countInStock: 20,
      brand: "Canyon",
      rating: 4,
      numReviews: 10,
      description:
        "The latest Shimano GRX600 gravel groupset is the ideal match for this aluminium gravel bike. Thanks to enhanced ergonomics and a 34-tooth cassette combined with 46/30 chainset, you’ll be able to spin up any climb you encounter.",
    },
    {
      name: "Aeroad CF SLX Disc 9.0 Di2",
      category: "Road",
      image: "/images/Aeroad.png",
      price: 6999,
      countInStock: 0,
      brand: "Canyon",
      rating: 4.5,
      numReviews: 10,
      description:
        "The shape of road performance has evolved, and the Aeroad CF SLX Disc 9.0 Di2 represents the latest step in that evolution – a truly innovative lightweight aero race bike with full disc brake control.",
    },
    {
      // _id: "4",
      name: "Grail CF SLX 8.0 ETAP",
      category: "Road",
      image: "/images/GSF.png",
      price: 5499,
      countInStock: 4,
      brand: "Canyon",
      rating: 4.5,
      numReviews: 10,
      description:
        "When it comes to the lightest gravel setup, the Grail CF SLX 8.0 eTap holds zero punches. Whether your calendar is packed with one-day events or you want a super-fast multi-day race rig, it doesn’t get much better than this.",
    },
    {
      // _id: "5",
      name: "Sender CFR FMD",
      category: "Mountain",
      image: "/images/SenderMT.png",
      price: 4799,
      countInStock: 5,
      brand: "Canyon",
      rating: 4.5,
      numReviews: 10,
      description:
        "Seagrave approved: Whether it’s huge freeride lines or the rapid downhill tracks of the World Cup circuit, when things get fast Tahnée and Kaos always go with the Sender CFR FMD.",
    },
    {
      // _id: "6",
      name: "Sender CFR",
      category: "Mountain",
      image: "/images/SendMT.png",
      price: 5799,
      countInStock: 2,
      brand: "Canyon",
      rating: 3.2,
      numReviews: 5,
      description:
        "Hunting for that perfect line or shaving seconds off the clock out on the track, the World Cup-proven Sender CFR was designed for all-out downhill racing.",
    },
  ],
};

export default data;
