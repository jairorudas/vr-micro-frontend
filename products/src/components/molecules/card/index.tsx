import styles from './styles.module.css';
import { Text, Button } from '../../atoms/index';
import { ESize } from '../../atoms/text/interfaces';
import { ItemCard } from './interfaces';

const Card = ({ data, action }: ItemCard) => {
	return (
		<div className={styles.card}>
			<img className={styles.img} alt='imagem' src={data.thumbnail} />
			<div className={styles.messages}>
				<Text
					label={data.title}
					weight={'bold'}
					size={ESize.medium}
					tag={'h4'}
				/>
				<Text
					label={data.description}
					weight={'normal'}
					size={ESize.medium}
					tag={'p'}
				/>
			</div>
			<div className={styles.actions}>
				<Text
					label={`R$ ${data.price}`}
					weight={'bold'}
					size={ESize.small}
					tag={'p'}
				/>
				<Button
					onClick={() => action(data)}
					label={'Comprar'}
					weight={'bold'}
					size={ESize.small}
				/>
			</div>
		</div>
	);
};

export { Card };
