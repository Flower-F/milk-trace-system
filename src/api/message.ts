import { request } from '@/utils';

type WithCompany<T> = T & {
  company: string;
  address: string;
  phone: string;
}

export type TRanch = {
  // 批次号
  batchId: string;
  // 产奶日期
  date: string;
  // 总净重
  weight: number;
}

export type TFactory = {
  // 批次号
  batchId: string;
  // 抽检日期
  checkDate: string;
  // 抽检人姓名
  checkPerson: string;
  // 产品成分
  material: string;
  // 产品名称
  product: string;
  // 加工日期
  workDate: string;
  // 加工人姓名
  workPerson: string;
}

export type TStorage= {
  // 批次号
  batchId: string;
  // 运输负责人
  driver: string;
}

export type TSeller = {
  // 批次号
  batchId: string;
  // 上架时间
  date: string;
  // 商品售价
  price: number;
}

export type TMessage = {
  ranch: WithCompany<TRanch> | null;
  factory: WithCompany<TFactory> | null;
  storage: WithCompany<TStorage> | null;
  seller: WithCompany<TSeller> | null;
  code: string | null;
  id: string;
}

export const getMessageApi = () => request<TMessage[]>({
  url: '/getMessage',
  method: 'GET',
});

export const setMessageApi = (
  data: Record<string, any>,
  code: string | null,
) => request<void>({
  url: '/setMessage',
  data: {
    message: JSON.stringify(data),
    code,
  },
  method: 'POST',
});
