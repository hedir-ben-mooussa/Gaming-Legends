export interface Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
    imagePath?: string;
    category?: any; // ideally replace with Category interface
    discount?: any; // ideally replace with Discount interface
  }
  