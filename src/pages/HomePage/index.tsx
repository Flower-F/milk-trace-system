import { Form, Tooltip } from '@douyinfe/semi-ui';

const HomePage = () => {
  const { Option } = Form.Select;

  return (
    <Form layout="horizontal" onValueChange={(values) => console.log(values)}>
      <Form.Select field="Role" label="角色" style={{ width: 176 }}>
        <Option value="admin">管理员</Option>
        <Option value="user">普通用户</Option>
        <Option value="guest">访客</Option>
      </Form.Select>
      <Form.Input field="UserName" label="用户名" style={{ width: 80 }} />
      <Form.Input
        field="Password"
        label={{
          text: '密码',
          extra: <Tooltip content="详情">hello world</Tooltip>,
        }}
        style={{ width: 176 }}
      />
    </Form>
  );
};

export default HomePage;
