import { IsIn, IsNotEmpty, IsOptional } from "class-validator";

export class CreateClientDto {

    @IsNotEmpty()
    name: string;
    
    email: string;

    @IsNotEmpty()
    contact: string;

    @IsNotEmpty()
    house: string;

    @IsNotEmpty()
    street: string;

    @IsNotEmpty()
    post: string;

    @IsNotEmpty()
    city: string;

    design: string;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    style: string;

    @IsNotEmpty()
    grade: string;

    @IsNotEmpty()
    dimension: number;

    @IsNotEmpty()
    walls: number;

    cost: number;

    @IsOptional()
    @IsIn(['yes', 'no'])
    status: string = 'no';
}
