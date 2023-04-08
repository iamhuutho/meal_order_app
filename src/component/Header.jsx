import { useContext, useState } from 'react';
import './Header.css'
import { UserContext } from './UserContext';
const Header = () =>{
    const {cartCount} = useContext(UserContext);
    const {billShown, setBillShown} = useContext(UserContext);
    const handleChange = () => {
        if(!billShown){
            setBillShown(true);
        }
    }
    return(
        <div className='header'>
            <div className='reactmeal'>ReactMeals</div>
            <div className='shoppingCard' onClick={handleChange}>
                <img src = "https://www.iconpacks.net/icons/3/free-icon-red-shopping-cart-10906.png"></img>
                <div className='Yourcart'>Your Cart</div>
                <div style={{
                    backgroundColor: '#B03B17',
                    borderRadius: '20px',
                    width: '25%',
                    height: '40%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div>{String(cartCount)}</div>
                </div>
            </div>
        </div>
    );
}
export default Header;