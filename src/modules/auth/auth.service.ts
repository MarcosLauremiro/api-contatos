import { JwtService } from '@nestjs/jwt';
import { UserService } from './../users/users.service';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) {}

    async login(email: string, password: string) {
        const user = await this.userService.findByEmail(email)

        if (!user) {
            throw new UnauthorizedException('invalid email or password')
        }

        const passwordMatch = await compare(password, user.password)

        if (!passwordMatch) {
            throw new UnauthorizedException('invalid email or password')
        }

        return {
            token: this.jwtService.sign({email: email}, {subject: user.id})
        }
    }
}