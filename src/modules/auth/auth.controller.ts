import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('login')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    async login(@Body() user: LoginDto) {
        return this.authService.login(user.email, user.password)
    }
}