import { PartialType } from '@nestjs/mapped-types';
import { CreateFournissseurDto } from './create-fournissseur.dto';

export class UpdateFournissseurDto extends PartialType(CreateFournissseurDto) {}
