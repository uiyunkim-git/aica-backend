import { forwardRef } from 'react';

import { BaseTextArea } from './TextArea.styled';

interface TextAreaProp extends React.ComponentProps<'textarea'> {
    className?: string;
    value?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, Omit<TextAreaProp, 'ref'>>(
    ({ className, value, ...rest }, ref) => {
        return (
            <BaseTextArea ref={ref} className={className} {...rest} value={value} />
        );
    },
);
TextArea.displayName = 'TextArea';
