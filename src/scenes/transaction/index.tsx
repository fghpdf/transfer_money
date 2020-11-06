import { Form, Button, Layout, Row, Col, message, Input, Modal }  from 'antd';
import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';
import './Transaction.css';

import Title from 'antd/lib/typography/Title';
import { useLocation } from 'react-router-dom';

import { v4 } from 'uuid';
import { createTransaction, refreshTransactionStatus } from '../../services/api';
import { ICreateTransactionParams } from '../../interfaces/transaction.interface';
import { IUser } from '../../interfaces/user.interface';
import { CheckOutlined, ClockCircleOutlined, StopOutlined, WarningOutlined } from '@ant-design/icons';
import { confirmTransaction } from '../../services/quotation';

const { Content } = Layout;


function getUser(key: string): IUser | undefined {
  const data = window.localStorage.getItem(key);
  if (!data) {
    return undefined;
  }

  return JSON.parse(data);
}

interface IState {
  quotationId?: string
  isConfirmHidden: boolean
  transactionId?: number
}

const modalConfirm = (status: string) => {
  switch(status) {
    case "10000":
      Modal.confirm({
        title: "Created",
        icon: <ClockCircleOutlined />,
        okText: "I got."
      });
      break;
    case "20000":
      Modal.confirm({
        title: "Confirmed",
        icon: <CheckOutlined />,
        okText: "I got."
      });
      break;
    case "50000":
      Modal.confirm({
        title: "Submitted",
        icon: <CheckOutlined />,
        okText: "I got."
      });
      break;
    case "70000":
      Modal.confirm({
        title: "Completed",
        icon: <CheckOutlined />,
        okText: "I got."
      });
      break;
    case "90400":
      Modal.error({
        title: "Payer Currently Unavailable",
        icon: <StopOutlined />,
        okText: "I got."
      })
      break;
    case "90201":
      Modal.error({
        title: "Barred Beneficiary",
        icon: <StopOutlined />,
        okText: "I got."
      })
      break;
    case "90305":
      Modal.error({
        title: "LIMITATIONS On TRANSACTION Value",
        icon: <WarningOutlined />,
        okText: "I got."
      })
      break;
  }
}


const CreateTransaction: FC = (props) => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const quotationId = useQuery().get("quotationId") || undefined;
  const [state, setState] = useState<IState>({
    quotationId,
    isConfirmHidden: true
  });

  const submitAndSaveInfo = async (values: {
    msisdn: string
  }) => {
    const sender = getUser('sender');
    if (!sender) {
      message.error("Please register sender first!")
      return
    }
    const beneficiary = getUser('beneficiary');
    if (!beneficiary) {
        message.error("Please register beneficiary first!")
        return
    }

    if (!state.quotationId) {
        message.error("no quotation!")
        return
    }

    const params: ICreateTransactionParams = {
      external_id: v4(),
      credit_party_identifier: {
          msisdn: values.msisdn
      },
      sender,
      beneficiary,
    }

    const transaction = await createTransaction(parseInt(state.quotationId), params);
    console.info(transaction);
    if (transaction.status === "10000") {
        await confirmTransaction(transaction.id);
        message.success("transfer success!");
        setState({
          quotationId,
          isConfirmHidden: false,
          transactionId: transaction.id
        });
    } else {
        message.error(`transfer error: ${transaction.statusMessage}`)
    }
  }

  const confirm = async (id: number | undefined) => {
    if (!id) {
      return;
    }
    const transaction = await refreshTransactionStatus(id);
    modalConfirm(transaction.status);
    setState({
      transactionId: transaction.id,
      isConfirmHidden: false,
      quotationId: quotationId
    })
  }

  return (
    <Layout className="layout">
      <Content>
        <Row justify="center" align="middle">
          <Col flex="2"></Col>
          <Col flex="auto">
          <Form
            name="createTransaction"
            className="form"
            layout="vertical"
            onFinish={submitAndSaveInfo}
          >
            <Form.Item>
                <Title>Enter some information</Title>
            </Form.Item>
            <Form.Item
              label="Msisdn"
              name="msisdn"
              rules={
                [
                  {
                    required: true,
                    message: "Please input your msisdn"
                  }
                ]
              }
            >
              <Input placeholder="Please input your msisdn"></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block hidden={state.isConfirmHidden} onClick={e => confirm(state.transactionId)}>Refresh</Button>
            </Form.Item>
          </Form>
          </Col>
          <Col flex="2"></Col>
        </Row>
      </Content>
    </Layout>
    
  )
}

export default CreateTransaction;