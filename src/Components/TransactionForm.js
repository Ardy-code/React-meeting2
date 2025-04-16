import React, { useState } from "react";

function TransactionForm({ onAdd }) {
  const [type, setType] = useState("income"); // income or expense
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return;

    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      description,
    };

    onAdd(newTransaction);

    // Reset form
    setAmount("");
    setDescription("");
    setType("income");
  };

  return (
    <div className="transaction-form">
      <h2>Tambah Transaksi</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Jenis:</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="income">Pemasukan</option>
            <option value="expense">Pengeluaran</option>
          </select>
        </div>

        <div>
          <label>Jumlah:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Masukkan jumlah"
          />
        </div>

        <div>
          <label>Deskripsi:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Masukkan deskripsi"
          />
        </div>

        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default TransactionForm;
