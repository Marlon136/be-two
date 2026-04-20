import { IsEnum, IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
import { BikeType } from '../entities/bike.entity';

export class CreateBikeDto {
  @MinLength(2)
  @IsString()
  marca: string;

  @IsEnum(BikeType)
  tipo: BikeType;


  @IsNumber()
  @IsPositive()
  velocidades: number;


  @IsString()
  descripcion: string;
}
