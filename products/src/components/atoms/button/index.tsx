import { IButton } from './interfaces';
import styles from './button.module.css';

const Button = ({ size, label, weight, onClick }: IButton) => {
	return (
		<button
			className={`${styles.button} ${styles[size]} ${styles[weight]}`}
			onClick={onClick}>
			{label}
		</button>
	);
};

export { Button };
