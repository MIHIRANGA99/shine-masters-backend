import { Controller } from "@nestjs/common/decorators/core";
import { VehicleService } from "./vehicle.service";
import { Body, Get, Post } from "@nestjs/common/decorators/http";
import { Vehicle } from "src/database/schemas/vehicle.schema";

@Controller('/vehicle')
export class VehicleController {
    constructor(private readonly vehicleService: VehicleService) {}

    @Get()
    getVehicles(): Promise<Vehicle[]> {
        return this.vehicleService.findAll();
    }

    @Post()
    createVehicle(@Body() vehicleBody: Vehicle): Promise<Vehicle> {
        return this.vehicleService.createVehicle(vehicleBody);
    }
}