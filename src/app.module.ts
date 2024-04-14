import { Module } from '@nestjs/common/decorators/modules';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './api/user/user.module';
import { VehicleModule } from './api/vehicle/vehicle.module';
import { LocationModule } from './api/location/location.module';

@Module({
  imports: [DatabaseModule, UserModule, VehicleModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
