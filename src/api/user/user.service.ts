import { Injectable } from "@nestjs/common/decorators/core";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/database/schemas/user.schema";
import { CreateUserDto } from "./dto/createUserDto";
import { loginUser, registerUser } from "src/firebase/utils/auth";
import { HttpException, HttpStatus } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return this.userModel.find();
    }

    async createUser(user: CreateUserDto): Promise<User> {
        const userAuth = await registerUser(user.email, user.password, user.username);
        const newUser: Partial<User> = {
            email: userAuth.user.email,
            isActive: true,
            role: 'client',
            userId: userAuth.user.uid,
            username: userAuth.user.displayName
        };
        return await this.userModel.create(newUser);
    }

    async userLogin(email: string, password: string): Promise<User> {
        const authUser = await loginUser(email, password);
        if (authUser) {
            const user = this.userModel.findOne({
                userId: authUser.user.uid
            });
    
            if (user) {
                return user
            } else {
                throw new HttpException('Cannot Find User!', HttpStatus.NOT_FOUND);
            }
        } else {
            throw new HttpException('Invalid User Credentials!', HttpStatus.BAD_REQUEST);
        }
    }
}