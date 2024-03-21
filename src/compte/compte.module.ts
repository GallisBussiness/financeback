import { Module } from '@nestjs/common';
import { CompteService } from './compte.service';
import { CompteController } from './compte.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Compte, CompteSchema } from './entities/compte.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Compte.name, schema:CompteSchema}])],
  controllers: [CompteController],
  providers: [CompteService],
})
export class CompteModule {}
