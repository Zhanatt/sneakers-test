

export default function Drawer({ onClose, onRempve, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img onClick={onClose} className="removeBtn cu-p" src="./img/btn-remove.svg" alt="Remove"/>
        </h2>

        {
          items.length > 0 ? (
              <div className="d-flex flex-column flex">
                <div className="items">
                {
                  items.map((obj) => (
                    <div key={obj.id} className="cartItem d-flex align-center mb-20">
                      <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"></div>  
                      <div className="mr-20 flex">
                        <p className="mb-5">{obj.title}</p>
                        <b>{obj.price} руб.</b>
                      </div>
                      <img 
                        className="removeBtn" 
                        onClick={() => onRempve(obj.id)} 
                        src="./img/btn-remove.svg"
                        alt="Remove"/>
                    </div>
                  ))
                }
              </div>
              
              <div className="cartTotalBlock">
                <ul>
                  <li>
                    <span>Итого: </span>
                    <div></div>
                    <b>21 498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                  </li>
                </ul>
                <button className="greenButton">
                  Оформить заказ 
                  <img src="./img/arrow.svg" alt="Arrow"/>
                </button>  
              </div>  
            </div>
          ) : (
            
          )
        }

        
          
        
              
            
      </div>
    </div>
  )
}
