import { IsString, IsEmail } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({
        description: 'Nombre del usuario',
        example: 'Pepe Martinez',
        minLength: 1,
        maxLength: 100
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Correo electrónico del usuario',
        example: 'pepe.martinez@gmail.com',
        format: 'email'
    })
    @IsEmail()
    email: string;
}