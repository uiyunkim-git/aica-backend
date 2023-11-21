'use client';

import { styled } from 'styled-components';

import { InputStatusType } from './AccountInput';
import { Box } from '@Atoms/Box';
import { Input } from '@Atoms/Input';

export const AccountInputContainer = styled(Box)<{
    width?: string;
    height?: string;
    status?: InputStatusType;
}>`
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '50px'};

    border: 1px solid ${({ status }) => getBorderColor(status)};
    border-radius: 6px;
    padding: 0 19px;
`;

export const BaseAccountInput = styled(Input)`
    color: white;
    font-size: 20px;
    font-weight: 400;

    &::placeholder {
        color: #757575;
    }
`;

const getBorderColor = (status?: InputStatusType) => {
    switch (status) {
        case 'valid':
            return '#014CF6';
        case 'invalid':
            return '#BE0000';
        case 'default':
        default:
            return '#B0B0B0';
    }
};
