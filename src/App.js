import React, { useState } from "react";
import logo from "./People_Dollar_logo__Money_Finances_logo-removebg-preview.png";
import "./App.css";
import Stateless from "./Components/Stateless";
import Profile from "./Components/Profile";
import TransactionForm from "./Components/TransactionForm";
import TransactionList from "./Components/TransactionsList";
import Nama from "./Components/Nama";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <nav className="sidebar">
        <div className="logo">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="logo-name">
            <span className="main-logo">Kosfund</span>
          </div>
        </div>
        <div className="menu">
          <ul className="menu-links">
            <li className="nav-links">
              <a href="">
                <i className="bx bxs-dashboard icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="">
                <i className="bx bxs-dashboard icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="">
                <i className="bx bxs-dashboard icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-links">
              <a href="">
                <i className="bx bxs-dashboard icon"></i>
                <span className="text nav-text">Dashboard</span>
              </a>
            </li>
            {/* ...menu lainnya... */}
          </ul>
        </div>

        <div className="bottom-content">
          <li>
            <a href="">
              <i className="bx bx-log-out icon"></i>
              <span className="text nav-text">Log Out</span>
            </a>
          </li>
        </div>
      </nav>

      <div className="dashboard-container">
        {/* Header */}
        <header className="dashboard-header">
          <div className="welcome-section">
            <Stateless title="Welcome Back" />
          </div>
          <div className="user-section">
            <div className="user-info">
              <img src="img/user.jpeg" alt="User Avatar" className="avatar" />
              <div className="user-details">
                <Nama />
                <Profile email="ardy9949@gmail.com" />
              </div>
            </div>
          </div>
        </header>
        <TransactionForm onAdd={addTransaction} />
        <TransactionList transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
