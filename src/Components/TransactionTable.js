import React, { useState } from "react";
import "./TransactionTable.css";

function TransactionTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [type, setType] = useState("income");
  const [amount, setAmount] = useState("");
  const [caption, setCaption] = useState("");
  const [transactions, setTransactions] = useState([]);

  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fungsi untuk menangani submit form (Menambahkan transaksi)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      caption,
    };

    setTransactions([...transactions, newTransaction]);

    // Reset form dan tutup modal
    setAmount("");
    setCaption("");
    closeModal();
  };

  // Fungsi untuk menghapus transaksi
  const handleDelete = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  // Fungsi untuk mengedit transaksi
  const handleEdit = (id) => {
    const transactionToEdit = transactions.find(
      (transaction) => transaction.id === id
    );
    setType(transactionToEdit.type);
    setAmount(transactionToEdit.amount);
    setCaption(transactionToEdit.caption);
    setIsModalOpen(true);
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    ); // Remove the old transaction
  };

  return (
    <div>
      <button onClick={openModal} className="add-transaction-btn">
        Add Transaction
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Add Transaction</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
              </div>

              <div>
                <label>Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  required
                />
              </div>

              <div>
                <label>Caption</label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter caption"
                  required
                />
              </div>

              <button type="submit">Add</button>
              <button type="button" onClick={closeModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Transaction Table */}
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Caption</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.caption}</td>
              <td>
                <button onClick={() => handleEdit(transaction.id)}>Edit</button>
                <button
                  onClick={() => handleDelete(transaction.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
