const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1000,
      category: "Electronics",
      stock: 5,
      variants: [
        { color: "Silver", storage: "256GB" },
        { color: "Black", storage: "512GB" }
      ]
    },
    {
      id: 2,
      name: "Shoes",
      price: 120,
      category: "Fashion",
      stock: 0,
      sizes: [7, 8, 9, 10]
    }
  ];

  
  //1. Get all available colors for Laptop

  const lappy = products.find(e => e.name === "Laptop");
  console.log(lappy);
  const colors = lappy.variants.map(e  => e.color);
  console.log(colors);