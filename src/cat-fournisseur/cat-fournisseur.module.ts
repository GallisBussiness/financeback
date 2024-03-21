import { Module } from '@nestjs/common';
import { CatFournisseurService } from './cat-fournisseur.service';
import { CatFournisseurController } from './cat-fournisseur.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CatFournisseur, CatFournisseurSchema } from './entities/cat-fournisseur.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: CatFournisseur.name,schema: CatFournisseurSchema}])],
  controllers: [CatFournisseurController],
  providers: [CatFournisseurService],
})
export class CatFournisseurModule {}
