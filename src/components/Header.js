import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className="d-flex justify-between">
      <Link to="/">
        <div className="d-flex align-center headerLeft">
          <img width={40} height={40} src="./img/logo.png" />
          <div>
            <h3>React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
       
      <ul className="d-flex align-center headerRight">
        <li className='cu-p' onClick={props.onClickCart}>
          <img width={18} height={18} src="./img/cart.svg" alt="basket" />
          <span>1205 руб.</span>
        </li>
        <Link to="/favorites" >
          <li>
            <img width={20} height={20} src="./img/heart.svg" alt="heart" />
          </li>
        </Link>
        <li>
          <img width={20} height={20} src="./img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  )
}
 