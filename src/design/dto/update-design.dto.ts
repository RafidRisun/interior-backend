import { IsOptional } from "class-validator";

export class UpdateDesignDto{
    @IsOptional()
    title: string;

    @IsOptional()
    description: string;

    @IsOptional()
    category: string;

    @IsOptional()
    style: string;

    @IsOptional()
    grade: string;

    @IsOptional()
    rate: number;

    @IsOptional()
    image: string;
}
