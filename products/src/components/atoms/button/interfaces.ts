/* eslint-disable @typescript-eslint/ban-types */
import { ButtonHTMLAttributes } from 'react';
import { ESize } from '../text/interfaces';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	weight: 'normal' | 'bold';
	size: ESize;
}

export type { IButton };
