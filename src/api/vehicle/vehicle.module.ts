import { Module } from "@nestjs/common/decorators/modules";
import { MongooseModule } from "@nestjs/mongoose";
import { Vehicle, VehicleSchema } from "src/database/schemas/vehicle.schema";
import { VehicleService } from "./vehicle.service";
import { VehicleController } from "./vehicle.controller";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Vehicle.name, schema: VehicleSchema}]),
    ],
    controllers: [VehicleController],
    providers: [VehicleService]
})
export class VehicleModule {}