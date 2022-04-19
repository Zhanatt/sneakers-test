import React from 'react';
import {useState} from 'react';
import ContentLoader from "react-content-loader"
import styles from './Card.module.scss';
import AppContext from '../../context';


export default function Card({
  id, 
  title, 
  imageUrl, 
  price, 
  onFavorite, 
  onPlus, 
  favorited = false,
  loading = false
 }) {

  const { IsItemAdded } = React.useContext(AppContext)
  const [isFavorite, setIsFavorite] = useState(favorited);


  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price })
    setIsFavorite(!isFavorite);
  }

  return(
      <div className={styles.card}>
        {
          loading ? <ContentLoader 
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          // {...props}
        >
          <rect x="0" y="171" rx="5" ry="5" width="150" height="15" /> 
          <rect x="0" y="193" rx="5" ry="5" width="100" height="15" /> 
          <rect x="117" y="230" rx="10" ry="10" width="32" height="32" /> 
          <rect x="0" y="234" rx="10" ry="10" width="80" height="25" /> 
          <rect x="0" y="0" rx="5" ry="5" width="150" height="155" />
        </ContentLoader> : 
        <>
          <div className={styles.favorite} onClick={onClickFavorite}>
              <img 
                src={isFavorite ? "./img/liked.svg" : "./img/unliked.svg"} 
                alt={isFavorite ? "Liked" : "Unliked"} 
              />
          </div>
          <img width="100%" height={135} src={imageUrl} alt="Sneakers" />
            <h5 className="mb-15 mt-15">{title}</h5>
          <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>{price} руб.</b>
              </div>

              <img
                  className={styles.plus}
                  width={30}
                  height={30}
                  onClick={onClickPlus}
                  src={IsItemAdded(id) ? "./img/btn-checked.svg" : "./img/btn-plus.svg"}
                  alt={IsItemAdded(id) ? "Checked" : "Plus"}
              />
          </div>
        </>
        }
        
      </div>
  );
}



