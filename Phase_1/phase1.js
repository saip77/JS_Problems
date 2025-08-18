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


  //2. Check if "Shoes" has size 9 available.

  const shoes =  products.find(e => e.name === "Shoes");
  console.log(shoes);
  const availableshoeSize = shoes.sizes.includes(9);
  console.log(availableshoeSize);

  // OR

  const shoeSize = shoes.sizes.find(e => e === 9);
  console.log(shoeSize);

  //3.

  const options = products.find(e => e.name === "Laptop")
                          .variants.map(
                            e => e.color +" "+ e.storage
                          )
  console.log(options);

  //Note:- While using arrow function if you use {} then you need to use return statement
  let obj1 = {
    name: products.find(e => e.name === "Laptop").name,
    options: products.find(e => e.name === "Laptop")
    .variants.map(
      e => e.color +" "+ e.storage
    )
  }
  console.log(obj1);

  let obj2 = {
    name: products.find(e => e.name === "Shoes").name,
    options: products.find(e => e.name === "Shoes").sizes
  }
  console.log(obj2);

  let newarr = [];
  newarr.push(obj1);
  newarr.push(obj2);
  console.log(newarr);