import React, { useEffect, useState } from 'react';
import { Card } from '../../molecules';
import PubSub from 'pubsub-js';
import styles from './styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { IProduct } from '../../../interfaces';
import { useFetchEventsProducts, useProducts } from '../../../service';
import { RootState } from '../../../store/store';
import { setProducts } from '../../../store/products';
import { setEventList } from '../../../store/eventEmitters';

const Product = React.memo(() => {
	const products = useSelector((state: RootState) => state.products?.items);
	const events = useSelector((state: RootState) => state.events?.events);
	const dispatch = useDispatch();
	const [productsSelected, setProductSelected] = useState<IProduct[] | []>([]);
	const { data } = useProducts();
	const { allEvents } = useFetchEventsProducts();

	useEffect(() => {
		if (allEvents) {
			dispatch(setEventList({ events: allEvents }));
		}
	}, [allEvents, dispatch]);

	useEffect(() => {
		console.log(events);
		if (data && products?.length === 0) {
			dispatch(setProducts(data));
		}
	}, [data, dispatch, products, events]);

	const updateSelectedProduct = (product: IProduct) => {
		setProductSelected([...productsSelected, product]);
	};

	useEffect(() => {
		if (productsSelected?.length > 0) {
			PubSub.publish(events.ADD_PRODUCT, {
				productsSelected: productsSelected,
			});
		}
	}, [productsSelected, events]);

	return (
		<section className={styles.container}>
			{products &&
				products?.map((product: IProduct) => (
					<div key={product.id}>
						<Card data={product} action={updateSelectedProduct} />
					</div>
				))}
		</section>
	);
});

export default Product;
