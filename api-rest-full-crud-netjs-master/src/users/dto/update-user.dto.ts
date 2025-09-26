import { IsString, IsOptional, IsEmail } from "class-validator";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class UpdateUserDto {
    @ApiPropertyOptional({
        description: 'Nombre del usuario',
        example: 'MAriano moreno Actualizado',
        minLength: 1,
        maxLength: 100
    })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({
        description: 'Correo electrónico del usuario',
        example: 'agus.actualizado@example.com',
        format: 'email'
    })
    @IsOptional()
    @IsEmail()
    email?: string;
}
