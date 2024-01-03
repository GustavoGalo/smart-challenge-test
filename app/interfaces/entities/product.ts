export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  description: string | null;
}

export interface ProductDTO {
  name: string;
  price: number;
  count: number;
  description: string | null;
}
