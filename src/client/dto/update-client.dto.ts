import { IsNotEmpty } from "class-validator";

export class UpdateClientDto {

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
}
