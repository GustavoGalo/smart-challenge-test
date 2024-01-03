export interface Order {
  id: number;
  userId: number;
  finished: boolean;
}

export interface OrderDTO {
  userId: number;
  finished?: boolean;
}
