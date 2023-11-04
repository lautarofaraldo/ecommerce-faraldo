import { AiFillStar } from "react-icons/ai";

const data = [
  {
    img: "https://m.media-amazon.com/images/I/61K4fusmgZL._AC_UF1000,1000_QL80_.jpg",
    title: "Gibson Les Paul Custom",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$700,00",
    newPrice: "$570,00",
    company: "Gibson",
    color: "white",
    category: "Rock N' Roll",
  },
  {
    img: "https://www.falymusic.com/images/detailed/20/LPM00M2CH1_3_opt.jpg",
    title: "Gibson Les Paul Standard",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$800,00",
    newPrice: "$670,00",
    company: "Gibson",
    color: "red",
    category: "Rock N' Roll",
  },

  {
    img: "https://musicshaker.com.ar/wp-content/uploads/2022/06/D_682765-MLA46244696634_062021-O.jpg",
    title: "Gibson Les Paul Custom",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$940,00",
    newPrice: "$700,00",
    company: "Gibson",
    color: "green",
    category: "Rock N' Roll",
  },
  {
    img: "https://i.ebayimg.com/thumbs/images/g/3HQAAOSwahllNz1P/s-l640.jpg",
    title: "Fender Performer Stratocaster",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$340,00",
    newPrice: "$300,00",
    company: "Fender",
    color: "black",
    category: "Rock N' Roll",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_866009-MLA49866001867_052022-O.webp",
    title: "Jackson X Series Dinky",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$390,00",
    newPrice: "$290,00",
    company: "Jackson",
    color: "green",
    category: "Shred",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_728922-MLA41284862700_032020-O.webp",
    title: "Fender Telecaster Mexican",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$460,00",
    newPrice: "$380,00",
    company: "Fender",
    color: "black",
    category: "Rock N' Roll",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3t5UezyfwdsUCr2G77XO0Cy2DF-pKrDZRsg&usqp=CAU",
    title: "Jackson Kelly JS32",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$540,00",
    newPrice: "$490,00",
    company: "Jackson",
    color: "white",
    category: "Shred",
  },

  {
    img: "https://i.pinimg.com/736x/a9/fe/7a/a9fe7aab960225d6e959f106220123b2.jpg",
    title: "Gibson Les Paul Custom",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$870,00",
    newPrice: "$800,00",
    company: "Gibson",
    color: "green",
    category: "Rock N' Roll",
  },

  {
    img: "https://101db.com.ar/10287-large_default/guitarra-electrica-fender-squier-affinity-stratocaster-blue-mastil-maple.jpg",
    title: "Fender Deluxe Stratocaster",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$240,00",
    newPrice: "$210,00",
    company: "Fender",
    color: "blue",
    category: "Rock N' Roll",
  },

  {
    img: "https://eusica.mx/product/image/large/0149912373_strat_vintera_50s_1.jpg",
    title: "IBANEZ GRX40MGN",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$540,00",
    newPrice: "$450,00",
    company: "Ibanez",
    color: "green",
    category: "Shred",
  },
  {
    img: "https://static.sonovente.com/img/library/zoom/37/450/37563_2.jpg",
    title: "Ibanez JRG200",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$1100,00",
    newPrice: "$990,00",
    company: "Ibanez",
    color: "red",
    category: "Shred",
  },
  {
    img: "https://musicshaker.com.ar/wp-content/uploads/2022/06/D_NQ_NP_638507-MLA31575761648_072019-O.webp",
    title: "Ibanez GRG270CA",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$740,00",
    newPrice: "$650,00",
    company: "Ibanez",
    color: "black",
    category: "Shred",
  },
  {
    img: "https://musicshaker.com.ar/wp-content/uploads/2022/06/D_693503-MLA46401797928_062021-O-480x480.jpg",
    title: "Ibanez Gio GRG140",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$720,00",
    newPrice: "$670,00",
    company: "Ibanez",
    color: "white",
    category: "Shred",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0061/8984/2496/products/8202025_300x300.jpg?v=1672349467",
    title: "Ibanez QX52-BKF",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$2400,00",
    newPrice: "$2200,00",
    company: "Ibanez",
    color: "black",
    category: "Shred",
  },

  {
    img: "https://static.bax-shop.es/image/product/46146/579130/b0bbcf60/1457454670Ibanez%20JEM70VSFG%20Steve%20Vai%20Premium%20Sea%20Foam%20Green%20body%201.jpg",
    title: "Ibanez Steve Vai",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$940,00",
    newPrice: "$890,00",
    company: "Ibanez",
    color: "green",
    category: "Shred",
  },
  {
    img: "https://media.guitarcenter.com/is/image/MMGS7/L47716000001000-00-720x720.jpg",
    title: "Jackson X Flying V",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$440,00",
    newPrice: "$420,00",
    company: "Jackson",
    color: "red",
    category: "Shred",
  },
  {
    img: "https://m.media-amazon.com/images/I/51Xj1-7UQqS._AC_UF894,1000_QL80_.jpg",
    title: "Jackson X Series DK2X",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$640,00",
    newPrice: "$550,00",
    company: "Jackson",
    color: "white",
    category: "Shred",
  },
  {
    img: "https://i0.wp.com/www.inovamusicnet.com/wp-content/uploads/2023/02/41tqMUdK0JL._AC_US600_.jpg?fit=600%2C600&ssl=1",
    title: "Jackson Series Dinky",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$540,00",
    newPrice: "$490,00",
    company: "Jackson",
    color: "blue",
    category: "Shred",
  },
  {
    img: "https://preview.free3d.com/img/2015/09/2145019200890996292/555rohyb.jpg",
    title: "Gibson ES Classic",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$1200,00",
    newPrice: "$1100,00",
    company: "Gibson",
    color: "black",
    category: "Rock N' Roll",
  },
  {
    img: "https://http2.mlstatic.com/D_NQ_NP_615564-MLA43824428900_102020-O.webp",
    title: "Jackson Dinky JS12",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$780,00",
    newPrice: "$720,00",
    company: "Jackson",
    color: "black",
    category: "Shred",
  },
  {
    img: "https://tiendamusicland.com/wp-content/uploads/2020/02/AFront-31.png",
    title: "Ibanez ART120",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$640,00",
    newPrice: "570,00",
    company: "Ibanez",
    color: "black",
    category: "Shred",
  },
  {
    img: "https://therockstore.com.ar/wp-content/uploads/2021/10/1621352607723.jpg",
    title: "Gibson SG Standar",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$940,00",
    newPrice: "$850,00",
    company: "Gibson",
    color: "red",
    category: "Rock N' Roll",
  },
  {
    img: "https://m.media-amazon.com/images/I/61wylDKo2wL._AC_UF1000,1000_QL80_.jpg",
    title: "Gibson Les Paul Studio",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$740,00",
    newPrice: "$600,00",
    company: "Gibson",
    color: "red",
    category: "Rock N' Roll",
  },

  {
    img: "https://eusica.mx/product/image/large/sgs00ebch1_front_1.jpg",
    title: "Gibson SG Standar Ebony",
    star: <AiFillStar className="rating-star" />,
    reviews: "(123 reviews)",
    prevPrice: "$640,00",
    newPrice: "$590,00",
    company: "Gibson",
    color: "black",
    category: "Rock N' Roll",
  },
];

export default data;