/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Card from '../Card';
import PubSub from 'pubsub-js';
import Close from './close';
import { IProduct } from '../Card/interfaces';
import Button from '../button';
import { useFetchEventsHeader } from '../../service';
import { IEvents } from './interfaces';

const Cart = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [events, setEvents] = useState<IEvents | null>(null);
	const [products, setProducts] = useState<IProduct[] | []>([]);
	const { allHeaderEvents } = useFetchEventsHeader();

	const toggleDrawer = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		console.log(allHeaderEvents);
		setEvents(allHeaderEvents);
	}, [allHeaderEvents]);

	useEffect(() => {
		let openCart: string | PubSubJS.SubscriptionListener<any>;
		if (events) {
			openCart = PubSub.subscribe(events.OPEN_CAR, (_, data) => {
				setIsOpen(data.openCart);
				setProducts(data.products);
			});
		}
		return () => {
			PubSub.unsubscribe(openCart);
		};
	}, [events]);
	return (
		<>
			{isOpen && products && (
				<div
					className={`${styles.backdrop} ${styles.open}`}
					onClick={toggleDrawer}>
					<div
						className={`${styles.drawer} ${styles.openDrawer}`}
						onClick={(e) => e.stopPropagation()}>
						<header className={styles.header}>
							<h5 className={styles.title}>Compras</h5>
							<span className={styles.quantity}>{products?.length}</span>
							<button className={styles.close} onClick={toggleDrawer}>
								<Close />
							</button>
						</header>
						{products.map((product) => (
							<Card product={product} />
						))}
						<div className={styles.actions}>
							<Button variant='button' onClick={toggleDrawer}>
								Concluir compras
							</Button>
							<Button variant='link' onClick={toggleDrawer}>
								cancelar
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Cart;
