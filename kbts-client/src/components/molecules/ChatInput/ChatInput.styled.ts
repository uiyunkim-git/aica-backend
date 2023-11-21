'use client';

import { styled } from 'styled-components';

import { Container } from '@Atoms/Container';
import { Button } from '@Atoms/Button';
import { Box } from '@Atoms/Box';

export const ChatInputContainer = styled(Container)`
    justify-content: space-between;
    gap: 20px;
    max-width: 1140px;
    min-height: 144px;
    max-height: 300px;

    padding: 20px 30px 15px;
    border-radius: 5px;

    background-color: #373737;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

export const ChatButtonContainer = styled(Box)`
    width: 100%;
    justify-content: space-between;
`;

export const PlusButton = styled(Button)`
    background: white;
    width: 32px;
    height: 32px;
    border-radius: 100%;

    &: hover {
        opacity: 0.7;
    }
`;

export const SendButton = styled(Button)`
    background: none;
    width: 40px;
    height: 40px;
    border-radius: 100%;

    &: hover {
        background: #525252;
    }
`;
