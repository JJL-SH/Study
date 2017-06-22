import React, { Component } from 'react';
import { Form, DatePicker } from 'antd';
import moment from 'moment';

const { RangePicker, MonthPicker } = DatePicker;
const FormItem = Form.Item;

class DateTest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formatType: "YYYY-MM",
      defaultValue: null
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        defaultValue: parseInt(Math.random() * 10, 10) > 5 ? '至今' : '2017-03'
      })
    }, 200)
  }
  render() {
    const { getFieldDecorator, setFieldsValue, fieldsValue } = this.props.form;
    let config = {
      rules: [{
        transform: (value) => {
          if (!value) {
            return;
          }
          let { formatType } = this.state;

          let defaultValue = moment().format(formatType) === value.format(formatType) ? '至今' : value.format(formatType);

          this.setState({
            defaultValue
          })
        }
      }]
    }

    Object.assign(this.state.defaultValue ? config : {}, { initialValue: this.state.defaultValue === "至今" ? moment() : moment(this.state.defaultValue) });

    return (

      <Form>
        <FormItem label="时间">
          {
            getFieldDecorator('data', config)(
              <MonthPicker format={this.state.defaultValue === "至今" ? "至今" : this.state.formatType}/>
            )
          }
        </FormItem>
      </Form>
    )
  }
}

 export default Form.create()(DateTest);