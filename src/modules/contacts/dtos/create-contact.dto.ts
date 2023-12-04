import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength } from "class-validator";

export class CreateContactDto {
    @ApiProperty()
    @IsString()
    name: string

    @ApiProperty()
    @IsEmail()
    @IsString()
    email: string

    @ApiProperty()
    @IsString()
    @MaxLength(11)
    fone: string
}