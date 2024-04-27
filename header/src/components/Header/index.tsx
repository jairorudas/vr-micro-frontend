import CartIcon from './cartIcon';
import styles from './header.module.css';
import Logo from '../../assets/logo-vr.webp';
import React, { useEffect, useState } from 'react';
import PubSub from 'pubsub-js';
import { useFetchEventsHeader, useFetchEventsProducts } from '../../services';

const Header = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [headerEvents, setHeaderEvent] = useState<any | null>(null);
  const [productEvents, setProductEvent] = useState<any | null>(null);
  const { allHeaderEvents } = useFetchEventsHeader();
  const { allProductEvents } = useFetchEventsProducts();

  useEffect(() => {
    setHeaderEvent(allHeaderEvents);
  }, [allHeaderEvents]);

  useEffect(() => {
    if (allProductEvents) {
      setProductEvent(allProductEvents);
    }
  }, [allProductEvents]);

  useEffect(() => {
    const addProduct = PubSub.subscribe('add_product', (_, data) => {
      setSelectedProducts(data.productsSelected);
    });
    return () => {
      PubSub.unsubscribe(addProduct);
    };
  }, [productEvents]);

  const openCart = () => {
    PubSub.publish(headerEvents.OPEN_CAR, {
      openCart: true,
      products: selectedProducts,
    });
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={styles.cart} onClick={openCart}>
        <span className={styles.badge}>
          <span className={styles.quantity}>{selectedProducts?.length}</span>
        </span>
        <CartIcon />
      </div>
    </header>
  );
};

export default Header;
