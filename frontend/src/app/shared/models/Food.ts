export class Food {
  id!: string; // ! means it is required field
  name!: string;
  price!: number;
  tags?: string[]; // ? means it is an optional field
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  origins!: string[];
  cookTime!: string;
}
