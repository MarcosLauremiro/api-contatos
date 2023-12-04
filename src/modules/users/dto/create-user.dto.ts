import { ApiProperty } from "@nestjs/swagger";
import { hashSync } from "bcryptjs";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @MaxLength(150)
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsEmail()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    @MaxLength(11)
    fone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Transform(({value}: {value: string}) => hashSync(value, 12), {
        groups: ['tranform']
    })
    password: string;
}