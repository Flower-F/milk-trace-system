import { Form, Modal } from '@douyinfe/semi-ui';
import { useCallback, useState } from 'react';
import format from 'date-fns/format';
import { TForm } from '@/utils';

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
  placeholder: `请输入您的${formData.label}`,
  rules: [{
    required: true,
    message: `${formData.label}为必填项`,
  }],
});

const ModalForm = ({
  title, visible, handleCancel, handleOk: handleModalClick, formDataList, code,
}: Props) => {
  const [form, setForm] = useState<Record<string, any>>({});

  const handleSubmit = useCallback((values: Record<string, any>) => {
    const itHasDate = Object.keys(values).includes('date');
    if (itHasDate) {
      values.date = format(values.date, 'yyyy-MM-dd');
    }

    console.log({
      ...values,
      code,
    });
  }, []);

  const handleOk = () => {
    if (handleModalClick) {
      handleModalClick();
    }
    handleSubmit(form);
  };

  const { Input, DatePicker, InputNumber } = Form;

  const renderForm = (formData: TForm) => {
    const properties = getProperties(formData);

    if (formData.type === 'number') {
      return (
        <InputNumber {...properties} min={0} defaultValue={0} />
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
      onOk={handleOk}
      onCancel={handleCancel}
      closeOnEsc
      visible={visible}
    >
      <Form
        onSubmit={handleSubmit}
        layout="vertical"
        onValueChange={(form) => setForm(form)}
      >
        {formDataList.map((formData) => renderForm(formData))}
      </Form>
    </Modal>
  );
};

export default ModalForm;
