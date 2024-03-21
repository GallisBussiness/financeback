import { PartialType } from '@nestjs/mapped-types';
import { CreateSousCompteDto } from './create-sous-compte.dto';

export class UpdateSousCompteDto extends PartialType(CreateSousCompteDto) {}
