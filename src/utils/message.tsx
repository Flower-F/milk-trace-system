import { Data } from '@douyinfe/semi-ui/lib/es/descriptions';
import { Typography } from '@douyinfe/semi-ui';
import shortid from 'shortid';
import {
  TFactory, TMessage, TRanch, TRole, TSeller, TStorage,
} from '@/api';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';

const ranchMapping = {
  batchId: '批次编号',
  weight: '总净重',
  date: '产奶日期',
};

const factoryMapping = {
  checkPerson: '抽检人',
  checkDate: '抽检日期',
  workPerson: '加工人',
  workDate: '加工日期',
  product: '产品名称',
  batchId: '批次编号',
  material: '产品成分',
  weight: '总净重',
};

const storageMapping = {
  driver: '运输负责人',
  batchId: '批次编号',
};

const sellerMapping = {
  price: '商品售价',
  date: '上架时间',
  batchId: '批次编号',
};

const { Paragraph } = Typography;

const standardItem = (
  item: TRanch | TFactory| TStorage | TSeller | null,
  mapper: Record<string, any>,
) => {
  const result: Data[] = [];

  if (item === null) {
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

type TStandardMessage = {
  ranch: Data[] | null;
  factory: Data[] | null;
  storage: Data[] | null;
  seller: Data[] | null;
  code: Data[] | null;
  role: TRole,
  id: string;
}

const getStandardMessage = (data: TMessage): TStandardMessage => {
  let role: TRole = RANCH;

  const ranch = standardItem(data.ranch, ranchMapping);
  if (ranch) {
    role = FACTORY;
  }

  const factory = standardItem(data.factory, factoryMapping);
  if (factory) {
    role = STORAGE;
  }

  const storage = standardItem(data.storage, storageMapping);
  if (storage) {
    role = SELLER;
  }

  const seller = standardItem(data.seller, sellerMapping);

  const code: Data[] = [];

  if (data.code) {
    code.push({
      key: '溯源码',
      value: <Paragraph copyable>{data.code}</Paragraph>,
    });
  }

  return {
    ranch,
    factory,
    storage,
    seller,
    code,
    role,
    id: shortid.generate(),
  };
};

export const getMessageList = (messageList: TMessage[]) => messageList.map(
  (item) => getStandardMessage(item),
);
