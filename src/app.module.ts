import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompteModule } from './compte/compte.module';
import { CompteDivisionnaireModule } from './compte-divisionnaire/compte-divisionnaire.module';
import { SousCompteModule } from './sous-compte/sous-compte.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CatFournisseurModule } from './cat-fournisseur/cat-fournisseur.module';
import { BanqueModule } from './banque/banque.module';
import { FournissseurModule } from './fournissseur/fournissseur.module';
import { BudgetModule } from './budget/budget.module';
import { CreditModule } from './credit/credit.module';
import { BordereauModule } from './bordereau/bordereau.module';
import { EngagementModule } from './engagement/engagement.module';
import { VersementModule } from './versement/versement.module';
import { VirementModule } from './virement/virement.module';
import { AutorisationModule } from './autorisation/autorisation.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { UserModule } from './user/user.module';
import { DocEngagementModule } from './doc-engagement/doc-engagement.module';
import { EngagementStateModule } from './engagement-state/engagement-state.module';
import { AuthMiddleware } from './auth/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { DocVersementModule } from './doc-versement/doc-versement.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URL'),
        autoCreate: true,
      }),
      inject: [ConfigService],
      
    }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '24h' },
        };
      },
      inject: [ConfigService],
    }),
     CompteModule, CompteDivisionnaireModule, SousCompteModule, CatFournisseurModule, BanqueModule, FournissseurModule, BudgetModule, CreditModule, BordereauModule,
     EngagementModule, VersementModule, VirementModule, AutorisationModule, CommentaireModule,
     UserModule,
     DocEngagementModule,
     EngagementStateModule,
     DocVersementModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('user/login')
      .forRoutes('*');
  }
}
