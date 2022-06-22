import { Data } from '@douyinfe/semi-ui/lib/es/descriptions';
import { Typography } from '@douyinfe/semi-ui';
import {
  TFactory, TMessage, TRanch, TRole, TSeller, TStorage,
} from '@/api';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';
import {
  factoryMapping, ranchMapping, sellerMapping, storageMapping,
} from './mapping';

const { Paragraph } = Typography;

const getStandardItem = (
  item: TRanch | TFactory| TStorage | TSeller | null | undefined,
  mapper: Record<string, any>,
) => {
  const result: Data[] = [];

  if (!item) {
    return null;
  }

  Object.keys(item).forEach((key) => {
    if (key === 'batchId') {
      result.unshift({
        key: mapper[key],
        value: item[key as keyof typeof item].length > 0
          ? <Paragraph copyable>{item[key as keyof typeof item]}</Paragraph>
          : item[key as keyof typeof item],
      });
    } else {
      result.push({
        key: mapper[key],
        value: item[key as keyof typeof item],
      });
    }
  });

  return result;
};

export type TStandardMessage = {
  ranch: Data[] | null;
  factory: Data[] | null;
  storage: Data[] | null;
  seller: Data[] | null;
  code: string | null;
  role: TRole;
  id: string;
}

const getStandardMessage = (data: TMessage): TStandardMessage => {
  let role: TRole = RANCH;

  const ranch = getStandardItem(data.ranch, ranchMapping);
  if (ranch) {
    role = FACTORY;
  }

  const factory = getStandardItem(data.factory, factoryMapping);
  if (factory) {
    role = STORAGE;
  }

  const storage = getStandardItem(data.storage, storageMapping);
  if (storage) {
    role = SELLER;
  }

  const seller = getStandardItem(data.seller, sellerMapping);

  return {
    ranch,
    factory,
    storage,
    seller,
    code: data.code,
    role,
    id: data.id,
  };
};

export const getStandardMessageList = (messageList: TMessage[] | null) => {
  if (messageList === null) {
    return [];
  }

  return messageList.map((item) => getStandardMessage(item));
};
