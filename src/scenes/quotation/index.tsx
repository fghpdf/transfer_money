import { Form, Button, Layout, Row, Col, Select, message, InputNumber, Drawer }  from 'antd';
import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';
import './Quotation.css';

import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';
import { ICreateQuotationParams, IQuotation } from '../../interfaces/quotation.interface';
import { IPayer } from '../../interfaces/payer.interface';

import { v4 } from 'uuid';
import { createQuotation } from '../../services/api';
import QuotationDetail from '../../components/quotation';

const { Content } = Layout;
const { Option } = Select;

function getPayerItem(): IPayer | undefined {
  const data = window.localStorage.getItem('payer');
  if (!data) {
    return undefined;
  }

  return JSON.parse(data);
}

interface IState {
  isNextHidden: boolean
  isDrawerShown: boolean
  quotation?: IQuotation
}

const CreateQuotation: FC = () => {
  const [state, setState] = useState<IState>({
    isNextHidden: true,
    isDrawerShown: false
  });

  const closeDrawer = () => {
    setState({
      isDrawerShown: false,
      isNextHidden: state.isNextHidden,
      quotation: state.quotation
    });
  }

  const submitAndSaveInfo = async (values: {
    mode: string
    transaction_type: string
    amount: number
    sourceCurrency: string
  }) => {
    console.log(values)
    const payer = getPayerItem();
    if (!payer) {
      message.error("Please choose payer or country first")
      return
    }

    const params: ICreateQuotationParams = {
      external_id: v4(),
      payer_id: payer.id,
      mode: values.mode,
      transaction_type: values.transaction_type,
      source: {
        amount: values.amount,
        country_iso_code: 'SGP',
        currency: values.sourceCurrency
      },
      destination: {
        currency: payer.currency
      }
    }

    const quotation = await createQuotation(params);
    console.log(quotation);

    setState({
      isDrawerShown: true,
      isNextHidden: false,
      quotation: quotation
    })
  }

  return (
    <Layout className="layout">
      <Content>
        <Row justify="center" align="middle">
          <Col flex="2"></Col>
          <Col flex="auto">
          <Form
            name="createQuotation"
            className="form"
            layout="vertical"
            onFinish={submitAndSaveInfo}
          >
            <Form.Item>
                <Title>Enter some information</Title>
            </Form.Item>
            <Form.Item
              label="Amount"
              name="amount"
              rules={
                [
                  {
                    required: true,
                    message: "Please input the amount you want to transfer"
                  }
                ]
              }
            >
              <InputNumber></InputNumber>
            </Form.Item>
            <Form.Item
              label="Your currency"
              name="sourceCurrency"
              rules={
                [
                  {
                    required: true,
                    message: "Please choose currency"
                  }
                ]
              }
            >
              <Select>
                <Option value="SGD">SGD</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Mode"
              name="mode"
              rules={
                [
                  {
                    required: true,
                    message: "Please choose mode"
                  }
                ]
              }
            >
              <Select>
                <Option value="SOURCE_AMOUNT">Source Amount</Option>
                <Option value="DESTINATION_AMOUNT">Destination Amount</Option>
              </Select>
            </Form.Item>
            <Form.Item
              label="Transaction Type"
              name="transaction_type"
              rules={
                [
                  {
                    required: true,
                    message: "Please choose transaction type"
                  }
                ]
              }
            >
              <Select>
                <Option value="C2C">C2C</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block hidden={state.isNextHidden}><Link to="/choose">Next</Link></Button>
            </Form.Item>
          </Form>
          </Col>
          <Col flex="2"></Col>
        </Row>
      </Content>
      <Drawer
        width={640}
        placement="right"
        visible={state.isDrawerShown}
        onClose={closeDrawer}
        >
          <QuotationDetail quotation={state.quotation}></QuotationDetail>
      </Drawer>
    </Layout>
    
  )
}

export default CreateQuotation;