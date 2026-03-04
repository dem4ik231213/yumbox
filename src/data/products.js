import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import burger from "../assets/burger.jpg";
import salad from "../assets/salad.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import pancake from "../assets/pancake.jpg";
import salad2 from "../assets/salad 2.jpg";
import salad3 from "../assets/salad3.jpg";

export const products = [
  {
    id: 1,
    name: 'Піца "Барбекю Чікен"',
    description: "курка • соус барбекю • моцарела",
    weight: "480 гр",
    price: 359,
    oldPrice: null,
    image: pizza1,
    badge: null,
  },
  {
    id: 2,
    name: 'Піца "4 Сири"',
    description: "сет 21",
    weight: "500 гр",
    price: 389,
    oldPrice: null,
    image: pizza2,
    badge: null,
  },
  {
    id: 3,
    name: 'Бургер "Classic Beef"',
    description: "Яловичина • сир чеддер",
    weight: "180 гр",
    price: 129,
    oldPrice: null,
    image: burger,
    badge: null,
  },
  {
    id: 4,
    name: 'Салат "Цезар з куркою"',
    description: "Курка • яйце • пармезан",
    weight: "210 гр",
    price: 179,
    oldPrice: null,
    image: salad,
    badge: null,
  },
  {
    id: 5,
    name: 'Торт "Малиновий чизкейк"',
    description: "Ніжний крем • малина",
    weight: "180 гр",
    price: 179,
    oldPrice: null,
    image: cheesecake,
    badge: null,
  },
  {
    id: 6,
    name: "Панкейки з сиропом",
    description: "сет 21",
    weight: "250 гр",
    price: 220,
    oldPrice: null,
    image: pancake,
    badge: null,
  },
  {
    id: 7,
    name: "Салат з куркою та грінками",
    description: "Курка • грінки",
    weight: "230 гр",
    price: 239,
    oldPrice: 289,
    image: salad2,
    badge: "🔥 Хіт",
  },
  {
    id: 8,
    name: "Салат з телятиною",
    description: "21 сет",
    weight: "220 гр",
    price: 250,
    oldPrice: null,
    image: salad3,
    badge: null,
  },
];

export const heroSet = {
  name: "СЕТ 21",
  price: 334,
  oldPrice: 554,
};

export const navLinks = ["Каталог", "Контакти", "Про нас", "Контакти"];