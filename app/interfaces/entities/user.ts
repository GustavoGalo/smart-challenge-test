export interface User {
  id: number;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}

export interface UserDTO {
  email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
}
