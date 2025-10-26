// 🛒 Categorias disponíveis no app
export const categories = [
    {
      id: '1',
      name: 'Frutas',
      color: '#C5D7B1',
      image: require('../../../assets/fruits.png'),
    },
    {
      id: '2',
      name: 'Diversos',
      color: '#92B6FA',
      image: require('../../../assets/grocery.png'),
    },
    {
      id: '3',
      name: 'Açougue',
      color: '#F0BDB2',
      image: require('../../../assets/meats.png'),
    },
    {
      id: '4',
      name: 'Bebidas',
      color: '#60F8E9',
      image: require('../../../assets/drinks.png'),
    },
  ];
  
  // 🧾 Histórico de compras anteriores
  export const previousPurchases = [
    {
      id: '1',
      category: 'Frutas',
      image: require('../../../assets/fruits.png'),
      bgColor: '#C5D7B1',
      date: '27/05/2024',
      total: 50.0,
      items: 5,
    },
    {
      id: '2',
      category: 'Diversos',
      image: require('../../../assets/grocery.png'),
      bgColor: '#92B6FA',
      date: '20/05/2024',
      total: 35.4,
      items: 6,
    },
    {
      id: '3',
      category: 'Açougue',
      image: require('../../../assets/meats.png'),
      bgColor: '#F0BDB2',
      date: '20/05/2024',
      total: 56.44,
      items: 3,
    },
    {
      id: '4',
      category: 'Bebidas',
      image: require('../../../assets/drinks.png'),
      bgColor: '#60F8E9',
      date: '15/05/2024',
      total: 28.9,
      items: 4,
    },
  ];
  
  // 🛍️ Itens atuais no carrinho
  export const cartItems = [
    {
      id: '1',
      category: 'Frutas',
      total: 50.0,
      items: 5,
      image: require('../../../assets/fruits.png'),
      bgColor: '#C5D7B1',
    },
    {
      id: '2',
      category: 'Diversos',
      total: 35.4,
      items: 6,
      image: require('../../../assets/grocery.png'),
      bgColor: '#E8F4FF',
    },
    {
      id: '3',
      category: 'Açougue',
      total: 56.44,
      items: 3,
      image: require('../../../assets/meats.png'),
      bgColor: '#E8FFE8',
    },
  ];
