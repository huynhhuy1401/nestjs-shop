import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Size } from 'src/enums/size.enum';
import { Category } from './category.schema';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({
    required: true,
    raw: raw({
      [Size.S]: { type: Number, default: 0 },
      [Size.M]: { type: Number, default: 0 },
      [Size.L]: { type: Number, default: 0 },
      [Size.XL]: { type: Number, default: 0 },
    }),
  })
  size: Record<Size, number>;

  @Prop()
  description: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }] })
  category: Category;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
