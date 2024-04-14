import { Module } from '@nestjs/common/decorators/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { Location, LocationSchema } from 'src/database/schemas/location.schema';
import { LocationController } from './location.controller';
import { LocationService } from './location.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Location.name, schema: LocationSchema },
    ]),
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
