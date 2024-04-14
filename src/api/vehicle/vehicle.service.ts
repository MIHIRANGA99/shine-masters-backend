import { Injectable } from "@nestjs/common/decorators/core";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Vehicle } from "src/database/schemas/vehicle.schema";

@Injectable()
export class VehicleService {
    constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>) {}

    async findAll(): Promise<Vehicle[]> {
        return await this.vehicleModel.find().populate("owner");
    }

    async createVehicle(vehicle: Vehicle): Promise<Vehicle> {
        return await this.vehicleModel.create(vehicle);
    }
}