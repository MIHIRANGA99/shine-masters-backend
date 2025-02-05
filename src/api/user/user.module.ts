import { Module } from "@nestjs/common/decorators/modules";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/database/schemas/user.schema";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
    ],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}