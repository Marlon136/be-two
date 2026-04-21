import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from 'src/cars/entities/car.entity';
import { cars } from './carros';


@Injectable()
export class SeedService {

  constructor(
      @InjectModel(Car.name)
      private readonly carsModel: Model<Car>, 
    ) {}

  
  async findAll () {
    try {
       await this.carsModel.deleteMany({});
       await this.carsModel.insertMany(cars);
       return `This action returns all seed`;
    } catch (error) {
      console.log(error)
    }
   
    
  }

  findOne(id: number) {
    return `This action returns a #${id} seed`;
  }
}
