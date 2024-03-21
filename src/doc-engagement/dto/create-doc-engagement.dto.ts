import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateDocEngagementDto {
    @IsNotEmpty()
    @IsString()
    nom: string;

    @IsNotEmpty()
    @IsMongoId()
    engagement: string;

    @IsOptional()
    @IsString()
    path: string;
}
