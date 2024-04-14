import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';
import { CommonSchema } from './common.schema';

@Schema({ timestamps: true, collection: 'vehicles' })
export class Vehicle extends CommonSchema {
  @Prop({ required: true })
  license_plate: string;

  @Prop({ required: true })
  model: string;

  @Prop({ required: true })
  brand: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  owner: User;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
