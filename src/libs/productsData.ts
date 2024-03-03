
export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  const productsData: Product[] = [
    {
      id: "1",
      name: "NoteBook",
      price: 38000,
      quantity: 0,
    },
    {
      id: "2",
      name: "iPad",
      price: 58000,
      quantity: 0,
    },
    {
      id: "3",
      name: "Bag",
      price: 2800,
      quantity: 0,
    },
  ];
  
  export default productsData;
  