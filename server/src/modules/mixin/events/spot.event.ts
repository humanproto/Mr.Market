import { SafeSnapshot } from '@mixin.dev/mixin-node-sdk';
import {
  ExchangeIndex,
  SpotOrderType,
  TradingType,
} from 'src/common/types/memo/memo';
import { SpotOrderStatus } from 'src/common/types/orders/states';
import { PairsMapKey, PairsMapValue } from 'src/common/types/pairs/pairs';

export class SpotOrderCreateEvent {
  tradingType: TradingType;
  spotOrderType: SpotOrderType;
  exchangeIndex: ExchangeIndex;
  destId: PairsMapKey;
  limitPrice?: string;
  refId?: string;
  snapshot: SafeSnapshot;
}

export class ExchangePlaceSpotEvent {
  orderId: string;
  exchangeIndex: ExchangeIndex;
  snapshotId: string;
  userId: string;
  type: SpotOrderType;
  state: SpotOrderStatus;
  symbol: PairsMapValue;
  baseAssetId: string;
  targetAssetId: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
  limitPrice?: string;
  refId?: string;
}

export class MixinReleaseTokenEvent {
  orderId: string;
  userId: string;
  assetId: string;
  amount: string;
  createdAt: string;
  updatedAt: string;
}
