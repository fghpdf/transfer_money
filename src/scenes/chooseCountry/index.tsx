import { Layout, Skeleton } from "antd";
import React from "react";
import { FC, useEffect, useState } from "react";
import CountryList from "../../components/country";
import { ICountry } from "../../interfaces/country.interface";
import { listCountries } from "../../services/api";

const { Content } = Layout;

const ChooseCountry: FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    listCountries().then((value) => {
      setCountries(value)
      setLoading(false)
    });
  }, [])

  return (
    <div>
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <h2>Choose your currency</h2>
          <Skeleton active loading={loading}>
            <CountryList countries={countries}></CountryList>
          </Skeleton>
        </Content>
      </Layout>
    </div>
  );
}

export default ChooseCountry;