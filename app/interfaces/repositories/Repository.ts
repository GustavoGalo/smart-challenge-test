/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Repository<T, K> {
  listAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  create(entity: K): Promise<T>;
  update(id: number, entity: K): Promise<T>;
  delete(id: number): Promise<void>;
  countRecords?: (filters: any) => Promise<number>;
  listAllWithFilters?: (filters: any) => Promise<T[]>;
}
