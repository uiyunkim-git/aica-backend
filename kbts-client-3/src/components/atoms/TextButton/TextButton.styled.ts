'use client';

import { styled } from 'styled-components';

import { Button } from '@Atoms/Button';
import { Text } from '@Atoms/Typography';

export const BaseTextButton = styled(Button)`
    background: none;

    & > span {
        color: #9e9e9e;
        transition: all 0.2s;
    }
    &:hover > span {
        color: #e0e0e0;
    }
`;

export const TextButtonText = styled(Text)`
    font-size: 16px;
    font-weight: 400;
`;
