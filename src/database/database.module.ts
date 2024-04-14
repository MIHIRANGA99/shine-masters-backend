import { Module } from '@nestjs/common/decorators/modules';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'src/constants/config';

@Module({
  imports: [
    MongooseModule.forRoot(
      config.database.uri,
      {
        dbName: config.database.dbName,
      },
    ),
  ],
  controllers: [],
  providers: []
})
export class DatabaseModule {}
