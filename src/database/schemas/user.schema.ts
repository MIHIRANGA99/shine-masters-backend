import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { CommonSchema } from './common.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, collection: 'users' })
export class User extends CommonSchema {
  @Prop({ required: true, unique: true })
  userId: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({
    required: true,
    unique: true,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  })
  email: string;

  @Prop({ required: true })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
