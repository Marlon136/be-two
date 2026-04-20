import { IsBoolean, isBoolean, IsNumber, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePilotDto {
    
    @IsString()
    nombre: string;
  
    @IsString()
    escuderia: string;
  
    @IsNumber()
    @IsPositive()
    numero: number;

    @IsBoolean()
    activo: boolean;
  
    @IsPositive()
    campeonatos: number;
}