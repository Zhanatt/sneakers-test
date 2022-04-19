import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';


import Home from './pages/Home';
import Favorites from './pages/Favorites';




export default function App() {
  
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData(){
      const cartResponse = await axios.get('https://6212081301ccdac074305751.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://6212081301ccdac074305751.mockapi.io/favorites');
      const itemsResponse = await axios.get('https://6212081301ccdac074305751.mockapi.io/items');

      setIsLoading(false);

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj)=>{
    console.log(obj);
    if (cartItems.find((item) => item.id == obj.id)){
      axios.delete(`https://6212081301ccdac074305751.mockapi.io/cart/${obj.id}`);
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
    } else{
      axios.post('https://6212081301ccdac074305751.mockapi.io/cart', obj);
      setCartItems(prev =>[...prev, obj])
    }
  };

  const onRempveItem = (id)=>{
    axios.delete(`https://6212081301ccdac074305751.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
  };

  const onAddToFavorite = async (obj)=>{
    console.log(obj)
    try{
      if(favorites.find(favObj => Number(favObj.id)== Number(obj.id))){
        axios.delete(`https://6212081301ccdac074305751.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev => prev.filter(item => item.id !== obj.id))
        // console.log(id)
      } else{
        const { data } = await axios.post('https://6212081301ccdac074305751.mockapi.io/favorites', obj);
        setFavorites(prev =>[...prev, data])
      }
    } catch(error){
      alert('Не удалось добавить в фавориты')
    }
    
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  const IsItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) == Number(id) )
  }


  return (
    <AppContext.Provider value={{ items, cartItems, favorites, IsItemAdded, onAddToFavorite }}>
      <div className="wrapper">

        {cartOpened && <Drawer items={cartItems} onClose={()=> setCartOpened(false)} onRempve={onRempveItem} />}
        <Header onClickCart={()=>setCartOpened(true)} />

        <Routes>
          <Route 
            path='/'  
            exact
            element = { 
            <Home 
                items={items} 
                cartItems={cartItems}
                searchValue={searchValue} 
                setSearchValue={setSearchValue} 
                onAddToFavorite={onAddToFavorite} 
                onAddToCart={onAddToCart} 
                onChangeSearchInput={onChangeSearchInput} 
                isLoading={isLoading}
            />}   
          />
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
        
        

      </div>
    </AppContext.Provider>

  );
}