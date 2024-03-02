import * as dotenv from 'dotenv';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TradeModule } from './modules/trade/trade.module';
import { Transaction } from './common/entities/transaction.entity';
import { StrategyModule } from './modules/strategy/strategy.module';
import { MarketdataModule } from './modules/marketdata/marketdata.module';

import { Trade } from './common/entities/trade.entity';
import { PerformanceModule } from './modules/performance/performance.module';
// import { TransactionsModule } from './modules/transactions/transactions.module';
import { UserBalance } from './common/entities/user-balance.entity';
import { Performance } from './common/entities/performance.entity';
import { HealthModule } from './modules/health/health.module';
import { CoingeckoModule } from './modules/coingecko/coingecko.module';
import configuration from './config/configuration';
import { AdminModule } from './modules/admin/admin.module';
dotenv.config();

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 60,
      },
    ]),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Trade, Performance, Transaction, UserBalance],
      synchronize: true,
    }),
    TradeModule,
    StrategyModule,
    MarketdataModule,
    PerformanceModule,
    // TransactionsModule
    CoingeckoModule,
    HealthModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
