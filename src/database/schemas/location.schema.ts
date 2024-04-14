import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CommonSchema } from './common.schema';

@Schema({ timestamps: true, collection: 'locations' })
export class Location extends CommonSchema {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ required: true })
  brNo: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
