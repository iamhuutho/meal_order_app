import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Menu from './component/Menu';
import Banner from './component/Banner';
import CardDescription from './component/CardDescription';
import { UserContext } from './component/UserContext';
import { useState } from 'react';
import Bill from './component/Bill';

function App() {
  const [cartCount, setCartCount] = useState(0); // add state for cartCount
  const [billShown, setBillShown] = useState(false);
  const [formShown, setFormShown] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalMoney, setTotalMoney] = useState(0);
  const [OrderSent, setOrderSent] = useState(false);
  const [isLoadingIn, setIsLoadingIn] = useState(true);
  const [orderSented, setOrderSented] = useState(false);

  const handleClose = () => {
    setBillShown(false);
  };
  const handleOrder = () => {
    setFormShown(true);
  }
  const handleCancel = () => {
    setFormShown(false);
  }
  const handleOrderSent = () => {
    setOrderSent(true);
  }
  const FINAL = () => {
    setBillShown(false);
    setFormShown(false);
    setOrderSented(false);
    setOrderSent(false);
    setTotalMoney(0);
    setCartCount(0);
    setCart([]);
  }
  return (
    <UserContext.Provider value={{ orderSented, setOrderSented, isLoadingIn, setIsLoadingIn, OrderSent, setOrderSent, cartCount, setCartCount, billShown, setBillShown, cart, setCart, formShown, setFormShown, totalMoney, setTotalMoney }}>
      <div className="App">
        <Header />
        <Banner />
        <CardDescription />
        <Menu />
        {billShown && (
          <div className="bill-overlay">
            <Bill className="bill" FINAL={FINAL} handleClose={handleClose} handleOrder={handleOrder} handleCancel={handleCancel} handleOrderSent={handleOrderSent} />
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}

export default App;
