import { ICardSelected } from './interfaces';
import styles from './styles.module.css';

const Card = ({ product }: ICardSelected) => {
	function textLimit(texto: string, limite: number): string {
		if (texto.length <= limite) {
			return texto;
		} else {
			return texto.slice(0, limite) + '...';
		}
	}
	return (
		<div className={styles.card} key={product.id}>
			<figure className={styles.figure}>
				<img
					className={styles.img}
					src={product.thumbnail}
					alt={product.title}
				/>
				<figcaption className={styles.name} title={product.description}>
					{textLimit(product.description, 80)}
				</figcaption>
			</figure>
			<p className={styles.price}>R${product.price}</p>
		</div>
	);
};

export default Card;
