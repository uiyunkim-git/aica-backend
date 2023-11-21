'use client';

import { styled } from 'styled-components';

import { Text } from '@Atoms/Typography';
import { Button } from '@Atoms/Button';

export const AccountButtonContainer = styled(Button)`
    box-sizing: border-box;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    width: 140px;
    height: 40px;
    border-radius: 4px;

    padding: 5px 8px;
    transition: all 0.2s;

    background: none;
    &: hover {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export const AccountButtonText = styled(Text)`
    color: white;
    font-size: 16px;
    font-family: Pretendard Variable;
    font-weight: 500;
    line-height: 26;
    letter-spacing: 0.5px;
`;
