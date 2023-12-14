import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post, Param, Patch, Delete, UseGuards, HttpCode } from '@nestjs/common';
import { UserService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get()
    findAll() {
        return this.userService.findAll()
    }

    // @Get(':id')
    // @ApiBearerAuth()
    // @UseGuards(JwtAuthGuard)
    // findOne(@Param('id') id: string) {
    //     return this.userService.findOne(id)
    // }

    @Get(':email')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    findEmail(@Param('email') email:string){
        return this.userService.findByEmail(email)
    }

    @Patch(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto)
    }

    @HttpCode(204)
    @Delete(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    delete(@Param('id') id: string) {
        return this.userService.remove(id)
    }
}