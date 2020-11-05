import React, { FC, useEffect, useState } from 'react';
import './Choose.css';

import ChoosePayer from '../../scenes/choosePayer';
import { Col, Collapse, Row, Button } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import Title from 'antd/lib/typography/Title';
import { useSelector } from 'react-redux';
import { IPayer } from '../../interfaces/payer.interface'
import { Link } from 'react-router-dom';

const selectPayerAndCountry = (state: {
  payer: IPayer
}) => {
  return {
    payer: state.payer
  };
};

const Choose: FC = () => {
  const { payer } = useSelector(selectPayerAndCountry)
  const [isNextHidden, setIsNextHidden] = useState(true)
  useEffect(() => {
    if (payer) {
      window.localStorage.setItem('payer', JSON.stringify(payer))
      setIsNextHidden(false)
    }
  }, [payer])
  
  return (
    <div>
      <Collapse bordered={false} className="site-collapse-custom-collapse">
        <CollapsePanel header={<Title level={3}>Payer</Title>} key="choosePayer" className="site-collapse-custom-panel">
          <ChoosePayer></ChoosePayer>
        </CollapsePanel>
        <Title level={4}>You choosed: {payer?.name} </Title>
      </Collapse>
      <Row justify="center" align="middle">
        <Col flex="1"></Col>
        <Col flex="auto">
          <Button block type="primary" hidden={isNextHidden}><Link to="/createQuotation">Next</Link></Button>
        </Col>
        <Col flex="1"></Col>
      </Row>
    </div>
    
  )
}

export default Choose;