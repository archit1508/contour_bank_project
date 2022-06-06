import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Accounts from './pages/Accounts/Accounts'
import Account from './components/Account'
import Transactions from './pages/Transactions/Transactions'
import Transaction from './pages/Transaction/Transaction'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/accounts' element={<Accounts />} />
        <Route path='/accounts/:accountId' element={<Account />} />
        <Route path='/accounts/:accountId/transactions' element={<Transactions />} />
        <Route path='/accounts/:accountId/transaction-:accountId/:transactionId' element={<Transaction />} />
      </Route>
      <Route
        path="*"
        element={
          <main>
            <p>nothing here</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
)
