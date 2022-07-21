import { IsOptional } from 'class-validator';
import { ObjectId } from 'mongoose';
import { Size } from 'src/enums/size.enum';

export class CreateProductDto {
  name: string;

  price: number;

  @IsOptional()
  size: Record<Size, number>;

  category: ObjectId;
}
