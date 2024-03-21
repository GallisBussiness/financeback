import { PartialType } from '@nestjs/mapped-types';
import { CreateDocVersementDto } from './create-doc-versement.dto';

export class UpdateDocVersementDto extends PartialType(CreateDocVersementDto) {}
