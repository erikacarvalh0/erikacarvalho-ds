import { forwardRef, type ButtonHTMLAttributes } from 'react';
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {variant?: 'primary' | 'secondary' | 'ghost'; size?: 'sm' | 'md' | 'lg'};
export const Button = forwardRef<HTMLButtonElement,ButtonProps>(function Button({variant='primary',size='md',className='',type='button',...rest},ref){return <button ref={ref} type={type} className={['ec-button','ec-button--'+variant,'ec-button--'+size,className].join(' ')} {...rest}/>;});
