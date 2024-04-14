import { Controller } from "@nestjs/common/decorators/core";
import { LocationService } from "./location.service";
import { Get } from "@nestjs/common/decorators/http";
import { Location } from "src/database/schemas/location.schema";

@Controller('location')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    @Get()
    getLocations(): Promise<Location[]> {
        return this.locationService.findAll()
    }
}