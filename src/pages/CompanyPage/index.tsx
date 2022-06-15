import { useCallback, useState } from 'react';
import { Button, Form, Toast } from '@douyinfe/semi-ui';
import { IconEdit2Stroked, IconUndo } from '@douyinfe/semi-icons';
import InfoBlock from '@/components/InfoBlock';
import styles from './style.module.scss';

const content = {
  company: '华南理工牧场',
  phone: '12345678909',
  address: '广东省广州市番禺区小谷围街道华南理工大学大学城校区',
};

const CompanyPage = () => {
  const [edit, setEdit] = useState(false);

  const handleSubmit = (values: any) => {
    // eslint-disable-next-line no-console
    console.log(values);
    Toast.info('表单已提交');
  };

  const changeEdit = useCallback(() => setEdit(!edit), [edit]);

  return (
    <div className={styles['company-container']}>
      <div className={styles.block}>
        <div className={styles.introduction}>
          <h3 className={styles.title}>公司介绍</h3>
          <div className={styles.edit} onClick={changeEdit} tabIndex={0} onKeyDown={changeEdit} role="button">
            { edit
              ? <IconUndo className={styles.icon} title="返回" />
              : <IconEdit2Stroked className={styles.icon} title="编辑" />}
          </div>
        </div>
        {
        edit ? (
          <Form onSubmit={(values) => handleSubmit(values)} className={styles.form}>
            <Form.Input field="name" label="公司名称" placeholder="请输入公司名称" />
            <Form.Input field="phone" label="联系方式" placeholder="请输入公司联系方式" />
            <Form.Input field="address" label="地址" placeholder="请输入公司地址" />
            <div className={styles.button}>
              <Button htmlType="submit" type="primary">更新信息</Button>
            </div>
          </Form>
        ) : (
          <div className={`${styles.form} ${styles.debounce}`}>
            <InfoBlock title="公司名称" content={content.company} />
            <InfoBlock title="联系方式" content={content.phone} />
            <InfoBlock title="地址" content={content.address} />
          </div>
        )
      }
      </div>
    </div>
  );
};

export default CompanyPage;
