import { Data } from '@douyinfe/semi-ui/lib/es/descriptions';
import { Typography } from '@douyinfe/semi-ui';
import {
  TFactory, TMessage, TRanch, TRole, TSeller, TStorage,
} from '@/api';
import {
  FACTORY, RANCH, SELLER, STORAGE,
} from '@/constants';

export const ranchMapping = {
  batchId: '批次编号',
  weight: '总净重',
  date: '产奶日期',
};

export const factoryMapping = {
  checkPerson: '抽检人',
  checkDate: '抽检日期',
  workPerson: '加工人',
  workDate: '加工日期',
  product: '产品名称',
  batchId: '批次编号',
  material: '产品成分',
  weight: '总净重',
};

export const storageMapping = {
  driver: '运输负责人',
  batchId: '批次编号',
};

export const sellerMapping = {
  price: '商品售价',
  date: '上架时间',
  batchId: '批次编号',
};

const { Paragraph } = Typography;

const getStandardItem = (
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
  role: TRole;
  id: string | null;
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
    id: data.code,
  };
};

export const getStandardMessageList = (messageList: TMessage[] | null) => {
  if (messageList === null) {
    return [];
  }

  return messageList.map((item) => getStandardMessage(item));
};

type TType = 'normal' | 'date' | 'number';

export type TForm = {
  label: string;
  field: string;
  type: TType;
}

const getType = (key: string): TType => {
  const standardKey = key.toLowerCase();

  if (standardKey.includes('date')) return 'date';

  if (standardKey === 'price' || standardKey === 'weight') return 'number';

  return 'normal';
};

export const getFormData = (mapping: Record<string, any>) => {
  const result:TForm[] = [];

  Object.keys(mapping).forEach((key) => {
    result.push({
      label: mapping[key],
      field: key,
      type: getType(key),
    });
  });

  return result;
};

const ranchFormData = getFormData(ranchMapping);
const factoryFormData = getFormData(factoryMapping);
const storageFormData = getFormData(storageMapping);
const sellerFormData = getFormData(sellerMapping);

export const formData = {
  ranchFormData,
  factoryFormData,
  storageFormData,
  sellerFormData,
};
