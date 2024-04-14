import { Controller } from "@nestjs/common/decorators/core";
import { Body, Get, Post } from "@nestjs/common/decorators/http";
import { UserService } from "./user.service";
import { User } from "src/database/schemas/user.schema";
import { CreateUserDto } from "./dto/createUserDto";
import { loginUserDto } from "./dto/loginUserDto";

@Controller('/user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    createUser(@Body() userBody: CreateUserDto): Promise<User> {
        return this.userService.createUser(userBody);
    }

    @Post('/login')
    loginUser(@Body() userBody: loginUserDto): Promise<User> {
        return this.userService.userLogin(userBody.email, userBody.password)
    }
}