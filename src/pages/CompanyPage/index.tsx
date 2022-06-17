import { useCallback, useEffect, useState } from 'react';
import {
  Button, Form, Spin, Toast,
} from '@douyinfe/semi-ui';
import { IconEdit2Stroked, IconUndo } from '@douyinfe/semi-icons';
import { InfoBlock } from '@/components';
import { useUserInfoStore } from '@/store';
import styles from './style.module.scss';

const CompanyPage = () => {
  const [edit, setEdit] = useState(false);

  const {
    userInfo, loading, loadUserInfo, setUserInfo,
  } = useUserInfoStore();

  useEffect(() => {
    loadUserInfo();
  }, []);

  const handleSubmit = useCallback(async (values: any) => {
    await setUserInfo(values);
    Toast.success('修改成功');
    setEdit(false);
  }, []);

  const changeEdit = useCallback(() => setEdit(!edit), [edit]);

  const renderForm = () => (
    <Form onSubmit={(values) => handleSubmit(values)} className={styles.form}>
      <Form.Input
        field="company"
        label="公司名称"
        placeholder="请输入公司名称"
        initValue={userInfo?.company}
        rules={[{ required: true, message: '公司名称为必填项' }]}
      />
      <Form.Input
        field="phone"
        label="联系方式"
        placeholder="请输入公司联系方式"
        initValue={userInfo?.phone}
        rules={[{ required: true, message: '公司联系方式为必填项' }]}
      />
      <Form.Input
        field="address"
        label="地址"
        placeholder="请输入公司地址"
        initValue={userInfo?.address}
        rules={[{ required: true, message: '公司地址为必填项' }]}
      />
      <div className={styles.button}>
        <Button htmlType="submit" type="primary">更新信息</Button>
      </div>
    </Form>
  );

  const renderInfoBlock = () => (
    <div className={styles.form}>
      {
        loading ? <div className={styles.spin}><Spin size="large" /></div>
          : (
            <>
              <InfoBlock title="公司名称" content={userInfo?.company} />
              <InfoBlock title="联系方式" content={userInfo?.phone} />
              <InfoBlock title="地址" content={userInfo?.address} />
            </>
          )
      }
    </div>
  );

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
        {edit ? renderForm() : renderInfoBlock()}
      </div>
    </div>
  );
};

export default CompanyPage;
