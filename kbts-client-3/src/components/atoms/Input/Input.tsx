import { forwardRef } from 'react';

import { BaseInput } from './Input.styled';

interface InputProp extends React.ComponentProps<'input'> {
    className?: string;
    children?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, Omit<InputProp, 'ref'>>(
    ({ className, children, ...rest }, ref) => {
        return (
            <BaseInput ref={ref} className={className} {...rest}>
                {children}
            </BaseInput>
        );
    },
);
Input.displayName = 'Input';
