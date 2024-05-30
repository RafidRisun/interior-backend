import { IsNotEmpty } from "class-validator";

export class CreateDesignDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    style: string;

    @IsNotEmpty()
    grade: string;

    @IsNotEmpty()
    rate: number;

    // @IsNotEmpty()
    // image: string;

    // date: Date;
    
}
