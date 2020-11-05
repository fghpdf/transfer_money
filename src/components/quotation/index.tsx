import 'antd/dist/antd.css';

import { IQuotation } from '../../interfaces/quotation.interface';

import { FC } from 'react';
import { Col, Descriptions, Empty, Row } from 'antd';
import React from 'react';

const { Item } = Descriptions;

interface quotationDetailProps {
  quotation?: IQuotation
}

function InfoQuotation (quotation:IQuotation) {
  return (
  <Descriptions title="Quotation Verify" layout="vertical">
    <Item label="Id">{quotation.id}</Item>
    <Item label="External Id">{quotation.external_id}</Item>
    <Item label="flow">{`${quotation.source.currency} -> ${quotation.destination.currency}`}</Item>
    <Item label="Fee">{`${quotation.fee.currency} - ${quotation.fee.amount}`}</Item>
    <Item label="Created At">{quotation.creation_date}</Item>
    <Item label="Expiration Date">{quotation.expiration_date}</Item>
  </Descriptions>
  )
}

const QuotationDetail: FC<quotationDetailProps> = (props) => {
  const { quotation } = props
  console.log(quotation)

  return (
   <Row justify="center" align="middle">
     <Col flex="2"></Col>
     <Col flex="auto">
       {quotation ? InfoQuotation(quotation) : <Empty></Empty>}
     </Col>
     <Col flex="2"></Col>
   </Row> 
  )
}

export default QuotationDetail;