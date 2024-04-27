import React from 'react';
import './styles.css';

type ButtonProps = {
	variant?: 'button' | 'link';
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	href?: string;
};

const Button: React.FC<ButtonProps> = ({
	variant = 'button',
	children,
	onClick,
	className,
	href,
}) => {
	const classNames = `btn ${className} ${
		variant === 'link' ? 'btn-link' : 'btn-button'
	}`;

	if (variant === 'link' && href) {
		return (
			<a href={href} className={classNames} onClick={onClick}>
				{children}
			</a>
		);
	} else {
		return (
			<button type='button' className={classNames} onClick={onClick}>
				{children}
			</button>
		);
	}
};

export default Button;
