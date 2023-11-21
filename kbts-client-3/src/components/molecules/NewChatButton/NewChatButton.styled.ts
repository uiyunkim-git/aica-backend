'use client';

import { styled } from 'styled-components';

import { Button } from '@Atoms/Button';
import { Text } from '@Atoms/Typography';

export const NewChatButtonContainer = styled(Button)`
    flex-direction: row;
    justify-content: flex-start;
    flex-shrink: 0;
    gap: 15px;

    width: 100%;
    height: 70px;
    padding: 0 24px;

    border-radius: 10px;
    background: #202020;

    &:hover {
        background: #373737;
    }
    &: active {
        background: #606060;
        transition: none;
    }
`;

export const NewChatButtonText = styled(Text)`
    color: white;
    font-size: 16px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0.4px;
`;
