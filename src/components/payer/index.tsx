import React, { FC } from 'react';
import { Card, Col, Descriptions, Row } from 'antd';
import { IPayer } from '../../interfaces/payer.interface';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import { useDispatch } from 'react-redux';
import { choosePayer } from '../../services/payer/dispatch';

interface payerListProps {
  payers: Array<IPayer>
}

const PayerList: FC<payerListProps> = (props) => {
  const { payers } = props;
  const dispatch = useDispatch();

  const handleClick = (e: React.MouseEvent<HTMLElement>, payer:IPayer) => {
    dispatch(choosePayer(payer))
  }

  const cols = payers.map((payer) => {
    return (
        <Col span={6} key={payer.id}>
          <Card hoverable bordered={false} onClick={e => handleClick(e, payer)}>
            <Descriptions title={payer.name} layout="vertical">
              <DescriptionsItem label="Currency">{payer.currency}</DescriptionsItem>
              <DescriptionsItem label="Country">{payer.country_iso_code}</DescriptionsItem>
              <DescriptionsItem label="C2C">{payer.transaction_types.C2C ? "✔️" : "❌"}</DescriptionsItem>
              <DescriptionsItem label="B2C">{payer.transaction_types.B2C ? "✔️" : "❌"}</DescriptionsItem>
              <DescriptionsItem label="B2B">{payer.transaction_types.B2B ? "✔️" : "❌"}</DescriptionsItem>
              <DescriptionsItem label="C2B">{payer.transaction_types.C2B ? "✔️" : "❌"}</DescriptionsItem>
            </Descriptions>
          </Card>
        </Col> 
    )  
  });

  return (
    <div>
      <Row gutter={[16, 16]}>
        {cols}
      </Row>
    </div>
  )
}


export default PayerList;

