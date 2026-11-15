import { forwardRef, type SelectHTMLAttributes } from 'react';
export type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;
export const Select = forwardRef<HTMLSelectElement,SelectProps>(function Select({className='',...rest},ref){return <select ref={ref} className={['ec-select',className].join(' ')} {...rest}/>;});
