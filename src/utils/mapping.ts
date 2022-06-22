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
