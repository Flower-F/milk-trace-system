import {
  Form, Modal, Spin, Toast,
} from '@douyinfe/semi-ui';
import { useCallback, useRef } from 'react';
import { format } from 'date-fns';
import { TForm } from '@/utils';
import { useMessageStore } from '@/store';
import styles from './style.module.scss';

type Props = {
  formDataList: TForm[];
  title: string;
  code: string | null;
  visible: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
}

const getProperties = (formData: TForm) => ({
  key: formData.field,
  field: formData.field,
  label: formData.label,
  placeholder: `请输入${formData.label}`,
  rules: [{
    required: true,
    message: `${formData.label}为必填项`,
  }],
});

const ModalForm = ({
  title, visible, handleCancel, handleOk, formDataList, code,
}: Props) => {
  const { setMessage, loading } = useMessageStore();
  const formRef = useRef<any>();

  const handleSubmit = useCallback(async () => {
    await formRef.current.validate().then(async (values: Record<string, any>) => {
      const includesDateKeyArray = Object.keys(values).filter((item) => item.includes('date') || item.includes('Date'));

      includesDateKeyArray.forEach((key) => {
        values[key] = format(values[key], 'yyyy-MM-dd');
      });

      await setMessage(values, code);

      if (handleOk) {
        handleOk();
      }
    }).catch(() => {
      Toast.error('您的表单信息填写有误');
    });
  }, []);

  const { Input, DatePicker, InputNumber } = Form;

  const renderForm = (formData: TForm) => {
    const properties = getProperties(formData);

    if (formData.type === 'number') {
      return (
        <InputNumber
          {...properties}
          min={0}
          defaultValue={0}
          rules={[{
            required: true,
            message: `${formData.label}为必填项`,
          }, {
            type: 'number',
            message: '此处必须填写数字类型',
          }]}
          placeholder={`请输入${formData.label}（单位为${formData.field === 'weight' ? '千克' : '元'}）`}
          style={{ width: '100%' }}
        />
      );
    } if (formData.type === 'date') {
      return (
        <DatePicker {...properties} />
      );
    }

    return (
      <Input {...properties} />
    );
  };

  return (
    <Modal
      title={title}
      onOk={handleSubmit}
      onCancel={handleCancel}
      closeOnEsc
      visible={visible}
      className={styles['modal-container']}
    >
      {
        loading ? <div className={styles.spin}><Spin size="large" /></div>
          : (
            <Form
              onSubmit={handleSubmit}
              layout="vertical"
              getFormApi={(formApi) => { formRef.current = formApi; }}
            >
              {formDataList.map((formData) => renderForm(formData))}
            </Form>
          )
      }
    </Modal>
  );
};

export default ModalForm;
