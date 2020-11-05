import { SolutionOutlined, TransactionOutlined, UserOutlined, UserSwitchOutlined, WalletOutlined } from "@ant-design/icons";
import { Col, Row, Steps } from "antd";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import 'antd/dist/antd.css';
import './Flow.css';
import { useLocation } from "react-router-dom";

const { Step } = Steps;

const flowIndex = new Map([
  ["/registerSender", 0],
  ["/registerBeneficiary", 1],
  ["/choose", 2],
  ["/quotation", 3],
  ["/transaction", 4]
])

const Flow: FC = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const index = flowIndex.get(location.pathname);
    setCurrent(index || 0);
  }, [location]);

  return (
    <Row justify="center" align="middle" className="flow">
      <Col flex="2"></Col>
      <Col flex="auto">
        <Steps current={current}>
          <Step key="registerSender" title="sender" icon={<UserOutlined />} />
          <Step key="registerBeneficiary" title="client" icon={<UserSwitchOutlined />} />
          <Step key="choose"  title="choose" icon={<WalletOutlined />} />
          <Step key="quotation"  title="quotation" icon={<SolutionOutlined />} />
          <Step key="transaction" title="Tran" icon={<TransactionOutlined />} />
        </Steps>
      </Col>
      <Col flex="2"></Col>
    </Row>
    
  )
}

export default Flow;