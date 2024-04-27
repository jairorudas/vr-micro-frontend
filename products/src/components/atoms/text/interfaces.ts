import { ElementType } from 'react';

enum ESize {
	small = 'small',
	medium = 'medium',
	large = 'large',
}
export interface IDynamicTag {
	tag: ElementType; // Usando ElementType do React para definir tipos válidos de elementos JSX
	children: React.ReactNode;
}

interface IText {
	label: string;
	weight: 'normal' | 'bold';
	size: ESize;
	tag?: ElementType;
}

export { ESize };
export type { IText };
