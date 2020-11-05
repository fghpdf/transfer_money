import { CheckOutlined, ClockCircleOutlined, QuestionOutlined, StopOutlined, WarningOutlined } from "@ant-design/icons";
import { Button, Col, List, Row } from "antd";
import React, { useEffect, useState } from "react";
import { FC } from "react";
import { ITransactionStatus } from "../../interfaces/transaction.interface";
import { getTransactionList, refreshTransactionStatus, setTransactionList } from "../../services/api";

const getIconFromStatus = (status: string) => {
  switch(status) {
    case "10000":
      return <ClockCircleOutlined />
    case "20000":
      return <CheckOutlined />
    case "90400":
      return <StopOutlined />
    case "90201":
      return <StopOutlined />
    case "90305":
      return <WarningOutlined />
  }

  return <QuestionOutlined />
}

interface ITransactionListProps {
  transactions: Array<ITransactionStatus>
}  


const TransactionList: FC<ITransactionListProps> = (props) => {
  const [transactions, setTransactions] = useState(props.transactions);

  const refreshStatus = async(item: ITransactionStatus) => {
    const transaction = await refreshTransactionStatus(item.id);
    console.log(transaction)
    setTransactionList(item.id, transaction.status, transaction.statusMessage);
    const data = getTransactionList();
    setTransactions(data);
  }

  useEffect(() => {
    setTransactions(props.transactions);
  }, [props.transactions])

  return (
    <Row justify="center" align="middle">
      <Col flex="2"></Col>
      <Col flex="auto">
        <List 
          bordered
          itemLayout="horizontal"
          dataSource={transactions}
          renderItem={(item: ITransactionStatus) => (
            <List.Item
              actions={[<Button onClick={e => refreshStatus(item)}>Refresh</Button>]}
            >
                <List.Item.Meta
                  avatar={getIconFromStatus(item.status)}
                  title={item.id}
                  description={item.statusMessage}
                >
                </List.Item.Meta>
            </List.Item>
        )}>
        </List>
      </Col>
      <Col flex="2"></Col>
    </Row>
  )
}

export default TransactionList