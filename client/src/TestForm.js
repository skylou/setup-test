import { Form, InputNumber, Button, Input } from "antd";

const TestForm = ({ onSubmit }) => {
  return (
    <Form initialValues={{ data: 0 }} onFinish={onSubmit}>
      <Form.Item
        label="Param1"
        name="param1"
        rules={[{ required: true, message: "Param1 is required!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Param2" name="param2">
        <InputNumber />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TestForm;
