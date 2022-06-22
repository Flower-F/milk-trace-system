import {
  Button, Empty, Form, Spin, Toast,
} from '@douyinfe/semi-ui';
import { useCallback } from 'react';
import { IllustrationNoResult, IllustrationNoResultDark } from '@douyinfe/semi-illustrations';
import { useTraceStore } from '@/store';
import { MessageList } from '@/components';
import styles from './style.module.scss';

const TracePage = () => {
  const { getTrace, loadTrace, loading } = useTraceStore();
  const trace = getTrace();

  const handleSubmit = useCallback(async (values: Record<string, any>) => {
    try {
      await loadTrace(values.code);
    } catch (error) {
      Toast.error('溯源码有误，请重新输入');
    }
  }, []);

  const renderMessageList = () => {
    if (trace.length === 0) {
      return (
        <Empty
          image={<IllustrationNoResult className={styles.empty} />}
          darkModeImage={<IllustrationNoResultDark className={styles.empty} />}
          description="请输入正确的溯源码以查看结果"
        />
      );
    }

    if (!loading) {
      return <MessageList messageList={trace} showCode={false} />;
    }

    return <div className={styles.spin}><Spin size="large" /></div>;
  };

  return (
    <div className={styles['trace-container']}>
      <Form
        layout="horizontal"
        className={styles['input-container']}
        onSubmit={handleSubmit}
      >
        <Form.Input
          className={styles.input}
          field="code"
          noLabel
          placeholder="请输入溯源码"
          rules={[{
            required: true,
            message: '您还未输入溯源码',
          }]}
        />
        <Button type="primary" htmlType="submit">提交</Button>
      </Form>
      {renderMessageList()}
    </div>
  );
};

export default TracePage;
