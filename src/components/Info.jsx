import React from 'react'

export const Info = () => {
  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img src="./img/empty-cart.jpg" alt="Empty" className="mb-20" width="120px" height="120px" />
      <h2>Корзина пустая</h2>
      <p className="opacity-6">Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <button onClick={onClose} className="greenButton">
        <img src="./img/arrow.svg" alt="Arrow" />
        Вернутся назад
      </button>
    </div>
  )
}
