// export class means that the class is accessible from the putside
export class Product {
  // ! means that the id is mandatory
  id!: number;
  name!: string;
  price!: number;
  tags?: string[];
  favorite: boolean = false;
  stars: number = 0;
  imageUrl!: string;
}
