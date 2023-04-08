import "./Bill.css"
import { UserContext } from "./UserContext";
import { useContext, useRef, useState } from "react";
import Order from "./Order";

function BillItem(props) {
    return (
        <div >
            <div className="Item" >
                <div>
                    <div style={{
                        fontWeight: 'bold',
                        fontSize: '20px',
                    }}>{props.name}</div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '25px',
                        alignItems: 'flex-end',
                    }}>
                        <div style={{
                            color: 'red',
                        }}>{props.price}</div>
                        <div style={{
                            border: '0.5px solid',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '5px',
                            padding: '2px',
                            fontWeight: 'bold',
                            width: '40px',
                            height: '18px',
                        }}>x {props.amount}</div>
                    </div>
                </div>
                <div className="buttonItem">
                    <button onClick={props.onDecrement}> - </button>
                    <button onClick={props.onIncrement}> + </button>
                </div>
            </div>

            <div className="line" style={{
                borderBottom: "2px solid rgb(124,54,32)",
                margin: "10px 0",
                width: '100%',
            }}>
            </div>
        </div>
    );
}

function Bill({ FINAL, handleClose, handleOrder, handleCancel, handleOrderSent }) {
    const { orderSented, cart, totalMoney, setCart, setTotalMoney, cartCount, setCartCount, OrderSent } = useContext(UserContext);
    const { formShown } = useContext(UserContext);
    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].amount++;
        setCart(newCart);
        setTotalMoney((Number(totalMoney) + Number(newCart[index].price)).toFixed(2));
        setCartCount(cartCount + 1);
    };

    const handleDecrement = (index) => {
        let newCart = [...cart];
        const itemAmount = newCart[index].amount;
        setTotalMoney(Number(Number(totalMoney) - Number(newCart[index].price)).toFixed(2));
        { console.log(newCart[index]) }
        if (itemAmount === 1) {
            newCart[index].amount--;
            newCart = newCart.filter(item => item.amount > 0);
        } else {
            newCart[index].amount--;
        }
        setCart(newCart);
        setCartCount(cartCount - 1);
    };
    return (
        <div className="bill">
            <div>
                {!OrderSent && cart.map((item, index) => {
                    return (
                        <BillItem
                            key={index}
                            name={item.name}
                            price={item.price}
                            amount={item.amount}
                            onIncrement={() => handleIncrement(index)}
                            onDecrement={() => handleDecrement(index)}
                        />
                    )
                })}
                <div className="footerBill" sytle = {{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}>
                    {!OrderSent && <div className="totalmoney" >
                        <div>Total Amount</div>
                        <div>$ {totalMoney}</div>
                    </div>}
                    {!formShown && !OrderSent && !orderSented && <div className="billButton">
                        <button className="billButtonClose" onClick={handleClose}>Close</button>
                        <button className="billButtonOrder" onClick={handleOrder}>Order</button>
                    </div>}
                    {formShown && !orderSented && <Order handleCancel={handleCancel} handleOrderSent={handleOrderSent} />}
                </div>
            </div>
            {OrderSent && !orderSented && <div>Sending order data ... </div>}
            {orderSented && <div className="confirmSent">
                <div>Succesfully sent the order!</div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <button className="finalCloseButton" onClick={FINAL}>Close</button>
                </div>
            </div>}
        </div>

    );
}
export default Bill;
