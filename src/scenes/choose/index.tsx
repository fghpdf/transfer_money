import React, { FC, useEffect, useState } from 'react';
import './Choose.css';

import ChooseCountry from '../../scenes/chooseCountry';

import ChoosePayer from '../../scenes/choosePayer';
import { Collapse } from 'antd';
import CollapsePanel from 'antd/lib/collapse/CollapsePanel';
import Title from 'antd/lib/typography/Title';
import { useSelector } from 'react-redux';
import { IPayer } from '../../interfaces/payer.interface'
import { ICountry } from '../../interfaces/country.interface';

const selectPayerAndCountry = (state: {
  payer: IPayer,
  country: ICountry
}) => {
  return {
    payer: state.payer,
    country: state.country
  };
};

const Choose: FC = () => {
  const { payer, country } = useSelector(selectPayerAndCountry)
  
  return (
    <Collapse bordered={false} className="site-collapse-custom-collapse">
      <CollapsePanel header={<Title level={3}>Country</Title>} key="chooseCountry" className="site-collapse-custom-panel">
        <ChooseCountry></ChooseCountry>
      </CollapsePanel>
      <Title level={4}>You choosed: {country?.name} </Title>
      <CollapsePanel header={<Title level={3}>Payer</Title>} key="choosePayer" className="site-collapse-custom-panel">
        <ChoosePayer></ChoosePayer>
      </CollapsePanel>
      <Title level={4}>You choosed: {payer?.name} </Title>
    </Collapse>
  )
}

export default Choose;