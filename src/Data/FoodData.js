export const foodsItens = [
  {
    name: "Mussarela",
    img: "/img/pizza1.jpg",
    section: 'pizza'
  },
  {
    name: "Peperrone",
    img: "/img/pizza2.jpg",
    section: 'pizza'
  },
  {
    name: "4 queijos",
    img: "/img/pizza3.jpg",
    section: 'pizza'
  },
  {
    name: "Hot Dog",
    img: "/img/hotdog.jpg",
    section: 'hotdog'
  },
  {
    name: "Burrito",
    img: "/img/burrito.jpeg",
    section: 'burrito'
  }
]

export const foods = foodsItens.reduce((res, food) => {
  if(!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food)
  return res;
}, {});