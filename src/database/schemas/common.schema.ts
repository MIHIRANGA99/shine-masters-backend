import { Prop, Schema } from "@nestjs/mongoose";
import { now } from "mongoose";

@Schema()
export class CommonSchema {
    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;

    @Prop({ required: true, default: true })
    isActive: Boolean;
}