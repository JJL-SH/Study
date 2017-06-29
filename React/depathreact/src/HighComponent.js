import React from 'react';
import { Input, Form, Button } from 'antd';

const FormItem = Form.Item;

class HighComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      console.log(values)
    })
  }
  validatorData = (value) => {
    let { setFieldsValue } = this.props.form;
    let newValue = parseInt(value, 10);

    setFieldsValue({inputValue: isNaN(newValue) ? '' : newValue})
  }
  render() {
    let { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="输入框">
            {
              getFieldDecorator("inputValue", {
                rules: [{
                  required: true,
                  pattern: /^\d+$/,
                  message: '数字',
                  transform: this.validatorData
                }],
              })(
                <Input />
              )
            }
          </FormItem>
          <FormItem label="提交">
            <Button htmlType="submit">Submit</Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default Form.create()(HighComponent);