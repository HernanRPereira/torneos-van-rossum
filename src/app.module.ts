import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { ResultadosModule } from './modules/resultados/resultados.module';
import { JugadoresModule } from './modules/jugadores/jugadores.module';
import { TorneosModule } from './modules/torneos/torneos.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // No usar en producción
    }),
    ResultadosModule,
    JugadoresModule,
    TorneosModule,
  ],
  providers: [],
})
export class AppModule {}
