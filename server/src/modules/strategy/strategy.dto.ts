// strategy.dto.ts

import { ApiProperty } from '@nestjs/swagger';

export class ArbitrageStrategyDto {
  @ApiProperty({ example: '123', description: 'User ID for whom the strategy is being executed.' })
  userId: string;

  @ApiProperty({ example: '456', description: 'Client ID associated with the user.' })
  clientId: string;

  @ApiProperty({ example: 'ETH/USDT', description: 'The trading pair to monitor for arbitrage opportunities.' })
  pair: string;

  @ApiProperty({ example: 1.0, description: 'The amount of the asset to trade.' })
  amountToTrade: number;

  @ApiProperty({ example: 0.01, description: 'Minimum profitability threshold as a decimal (e.g., 0.01 for 1%).' })
  minProfitability: number;

  @ApiProperty({ example: 'binance', description: 'Name of the first exchange.' })
  exchangeAName: string;

  @ApiProperty({ example: 'mexc', description: 'Name of the second exchange.' })
  exchangeBName: string;
}


export class PureMarketMakingStrategyDto {
  @ApiProperty({ description: 'User ID' })
  userId: string;

  @ApiProperty({ description: 'Client ID' })
  clientId: string;

  @ApiProperty({ description: 'Trading pair', example: 'BTC/USD' })
  pair: string;

  @ApiProperty({ description: 'Exchange name', example: 'binance' })
  exchangeName: string;

  @ApiProperty({ description: 'Bid spread as a percentage', example: 0.001 })
  bidSpread: number;

  @ApiProperty({ description: 'Ask spread as a percentage', example: 0.001 })
  askSpread: number;

  @ApiProperty({ description: 'Order amount', example: 0.1 })
  orderAmount: number;

  @ApiProperty({ description: 'Order refresh time in milliseconds', example: 15000 })
  orderRefreshTime: number;
}