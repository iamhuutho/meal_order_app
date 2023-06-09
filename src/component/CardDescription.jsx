import './CardDescription.css'
function CardDescription() {
    return (
        <div className='intro' style={{
            textAlign: 'center',
        }}>
            <h2>Delicious Food, Delivered To You</h2>
            <div className='small'>
                <p>
                    Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chiefs!
                </p>
            </div>
        </div>
    );
}

export default CardDescription