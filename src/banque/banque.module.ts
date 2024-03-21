import { Module } from '@nestjs/common';
import { BanqueService } from './banque.service';
import { BanqueController } from './banque.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Banque, BanqueSchema } from './entities/banque.entity';

@Module({
  imports:[MongooseModule.forFeature([{name: Banque.name,schema: BanqueSchema}])],
  controllers: [BanqueController],
  providers: [BanqueService],
})
export class BanqueModule {}
