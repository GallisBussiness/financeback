import { PartialType } from '@nestjs/mapped-types';
import { CreateCompteDivisionnaireDto } from './create-compte-divisionnaire.dto';

export class UpdateCompteDivisionnaireDto extends PartialType(CreateCompteDivisionnaireDto) {}
