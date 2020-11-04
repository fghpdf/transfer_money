import { Layout, Skeleton } from "antd";
import React from "react";
import { FC, useEffect, useState } from "react";
import PayerList from "../../components/payer";
import { IPayer } from "../../interfaces/payer.interface";
import { listPayers } from "../../services/api";

const { Content } = Layout;

const ChoosePayer: FC = () => {
  const [payers, setPayers] = useState<IPayer[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
      listPayers().then((value) => {
          setPayers(value);
          setLoading(false);
      })
  }, [])

  return (
    <div>
      <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
          <h2>Choose your client currency</h2>
          <Skeleton active loading={loading}>
            <PayerList payers={payers}></PayerList>
          </Skeleton>
        </Content>
      </Layout>
    </div>
  );
}

export default ChoosePayer;