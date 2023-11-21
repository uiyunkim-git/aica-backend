import { ChangeEvent } from 'react';

import { AccountInputContainer, BaseAccountInput } from './AccountInput.styled';

export type InputStatusType = 'valid' | 'invalid' | 'default';
interface AccountInputProp {
    type: 'text' | 'password';
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    width?: string;
    height?: string;
    status?: InputStatusType;
    children?: React.ReactNode;
}

export function AccountInput({
    type,
    onChange,
    value,
    placeholder,
    disabled,
    width,
    height,
    status = 'default',
    children
}: AccountInputProp) {
    return (
        <AccountInputContainer width={width} height={height} status={status}>
            <BaseAccountInput
                type={type}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                disabled={disabled}
            />
            {children}
        </AccountInputContainer>
    );
}
