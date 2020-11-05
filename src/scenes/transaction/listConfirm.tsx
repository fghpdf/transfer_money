import React, { useEffect, useState } from "react";
import { FC } from "react";
import TransactionList from "../../components/transaction";
import { ITransactionStatus } from "../../interfaces/transaction.interface";
import { getTransactionList } from "../../services/api";

const ListTransactionStatus:FC = () => {
  const [transactions, setTransactions] = useState<ITransactionStatus[]>([])
  useEffect(() => {
    const data = getTransactionList();
    console.log(data);
    setTransactions(data);
  }, [])

  return (
    <TransactionList transactions={transactions}>
    </TransactionList>
  )
}

export default ListTransactionStatus;