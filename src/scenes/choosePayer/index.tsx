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
      <h2>Choose your client currency</h2>
      <PayerList payers={payers}></PayerList>
      <Skeleton active loading={loading}>
      </Skeleton>
    </div>
  );
}

export default ChoosePayer;