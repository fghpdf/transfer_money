import React, { FC } from 'react';
import { Card, Col, Row } from 'antd';
import { ICountry } from '../../interfaces/country.interface';
import { chooseCountry } from '../../services/country/dispatch';
import { useDispatch } from 'react-redux';

interface countryListProps {
  countries: Array<ICountry>
}

const CountryList: FC<countryListProps> = (props) => {
  const { countries } = props;
  const dispatch = useDispatch();
  const handleClick = (e: React.MouseEvent<HTMLElement>, country:ICountry) => {
    dispatch(chooseCountry(country))
  }

  const cols = countries.map((country) => {
    return (
      <Col span={6} key={country.currency}>
        <Card title={`${country.flag} ${country.name}`} hoverable bordered={false} onClick={e => handleClick(e, country)}>
          {country.currency}
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

export default CountryList;

