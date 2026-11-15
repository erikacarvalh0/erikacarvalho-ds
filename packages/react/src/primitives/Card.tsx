import { forwardRef, type HTMLAttributes } from 'react';
export type CardProps = HTMLAttributes<HTMLElement> & {padding?: 'sm'|'md'|'lg'};
export const Card = forwardRef<HTMLElement,CardProps>(function Card({padding='md',className='',...rest},ref){return <section ref={ref} className={['ec-card','ec-card--'+padding,className].join(' ')} {...rest}/>;});
