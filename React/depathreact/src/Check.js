import React, { Component } from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

class Check extends Component {
  handleChange = (e) => {
    let number = parseInt(e.target.value, 10);
    let { setFieldsValue } = this.props.form;
    
    console.log(isNaN(number))
    setTimeout(() => {
      setFieldsValue({money: isNaN(number) ? '' : number})
    })
    
  }
  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;

    return (
      <Form>
        <FormItem label="Number">
          {
            getFieldDecorator('money')(
              <Input onChange={this.handleChange}/>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Check);