import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ["Honda", "Toyota", "Jeep"];
    
    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id : string) {
                
        return this.cars[id];
    }
}
