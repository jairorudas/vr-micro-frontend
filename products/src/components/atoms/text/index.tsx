import { IText, IDynamicTag } from './interfaces';
import styles from './styles.module.css';
const DynamicTag: React.FC<IDynamicTag> = ({
	tag: Tag,
	children,
	...props
}) => {
	return (
		<Tag {...props} className={styles.resetTag}>
			{children}
		</Tag>
	);
};

const Text = ({ label, size, weight, tag }: IText) => {
	const Tag = tag || 'div';
	return (
		<DynamicTag tag={Tag}>
			<span className={`${styles[weight]} ${styles[size]}`}>{label}</span>
		</DynamicTag>
	);
};
export { Text };
