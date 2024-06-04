import { Module } from '@nestjs/common';
import { TorneosService } from './torneos.service';
import { TorneosController } from './torneos.controller';

@Module({
  providers: [TorneosService],
  controllers: [TorneosController]
})
export class TorneosModule {}
