import { describe, it, expect } from 'vitest';
import { formData } from '../mapping';

describe('Message Test', () => {
  it('it should format correctly', () => {
    expect(formData.ranchFormData).toMatchInlineSnapshot(`
      [
        {
          "field": "batchId",
          "label": "批次编号",
          "type": "normal",
        },
        {
          "field": "weight",
          "label": "总净重",
          "type": "number",
        },
        {
          "field": "date",
          "label": "产奶日期",
          "type": "date",
        },
      ]
    `);

    expect(formData.factoryFormData).toMatchInlineSnapshot(`
      [
        {
          "field": "checkPerson",
          "label": "抽检人",
          "type": "normal",
        },
        {
          "field": "checkDate",
          "label": "抽检日期",
          "type": "date",
        },
        {
          "field": "workPerson",
          "label": "加工人",
          "type": "normal",
        },
        {
          "field": "workDate",
          "label": "加工日期",
          "type": "date",
        },
        {
          "field": "product",
          "label": "产品名称",
          "type": "normal",
        },
        {
          "field": "batchId",
          "label": "批次编号",
          "type": "normal",
        },
        {
          "field": "material",
          "label": "产品成分",
          "type": "normal",
        },
      ]
    `);

    expect(formData.storageFormData).toMatchInlineSnapshot(`
      [
        {
          "field": "driver",
          "label": "运输负责人",
          "type": "normal",
        },
        {
          "field": "batchId",
          "label": "批次编号",
          "type": "normal",
        },
      ]
    `);

    expect(formData.sellerFormData).toMatchInlineSnapshot(`
      [
        {
          "field": "price",
          "label": "商品售价",
          "type": "number",
        },
        {
          "field": "date",
          "label": "上架时间",
          "type": "date",
        },
        {
          "field": "batchId",
          "label": "批次编号",
          "type": "normal",
        },
      ]
    `);
  });
});
