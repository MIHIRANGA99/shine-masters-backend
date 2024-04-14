import { Injectable } from "@nestjs/common/decorators/core";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Location } from "src/database/schemas/location.schema";

@Injectable()
export class LocationService {
    constructor(@InjectModel(Location.name) private locationModel: Model<Location>) {}

    async findAll(): Promise<Location[]> {
        return this.locationModel.find()
    }
}