import React from "react";
import "./TransactionList.css";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Daftar Transaksi</h2>
      {transactions.length === 0 ? (
        <p>Tidak ada transaksi</p>
      ) : (
        <ul>
          {transactions.map((tx) => (
            <li key={tx.id}>
              <strong>
                {tx.type === "income" ? "Pemasukan" : "Pengeluaran"}:
              </strong>{" "}
              Rp{tx.amount} - {tx.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TransactionList;
