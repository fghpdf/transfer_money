import { Form, Input, Button, Layout, Row, Col, message }  from 'antd';
import React, { FC, useState } from 'react';
import 'antd/dist/antd.css';
import './Sender.css';

import { UserOutlined, HomeOutlined } from '@ant-design/icons';
import { IUser } from '../../../interfaces/user.interface';
import Title from 'antd/lib/typography/Title';
import { Link } from 'react-router-dom';

const { Content } = Layout;

const SenderRegister: FC = () => {
  const [isNextHidden, setIsNextHidden] = useState(true);

  const saveInfo = (values: IUser) => {
    window.localStorage.setItem('sender', JSON.stringify(values));
    message.success("sender info saved, you can click next or rewrite information.")
    setIsNextHidden(false)
  }

  return (
    <Layout className="layout">
      <Content>
        <Row justify="center" align="middle">
          <Col flex="2"></Col>
          <Col flex="auto">
          <Form
            name="senderRegister"
            className="form"
            layout="vertical"
            onFinish={saveInfo}
          >
            <Form.Item>
                <Title>Enter Your Information</Title>
            </Form.Item>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={
                [
                  {
                    required: true,
                    message: "Please input your first name"
                  }
                ]
              }
            >
              <Input placeholder="Enter your first name" prefix={<UserOutlined></UserOutlined>}></Input>
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastname"
              rules={
                [
                  {
                    required: true,
                    message: "Please input your last name"
                  }
                ]
              }
            >
              <Input placeholder="Enter your last name" prefix={<UserOutlined></UserOutlined>}></Input>
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={
                [
                  {
                    required: true,
                    message: "Please input your address"
                  }
                ]
              }
            >
              <Input placeholder="Enter your address" prefix={<HomeOutlined></HomeOutlined>}></Input>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button block hidden={isNextHidden}><Link to="/registerBeneficiary">Next</Link></Button>
            </Form.Item>
          </Form>
          </Col>
          <Col flex="2"></Col>
        </Row>
      </Content>
    </Layout>
    
  )
}

export default SenderRegister;