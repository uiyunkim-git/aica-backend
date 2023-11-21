'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';
import { Button } from '@Atoms/Button';

export const ThumbButtonContainer = styled(Box)`
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    width: 95px;
    height: 34px;
    border-radius: 17px;
    padding: 7px 15px;

    background-color: #424242;
`;

export const ThumbButtonWrapper = styled(Button)`
    width: 20px;
    height: 20px;
    background: none;

    &: hover {
        opacity: 0.5;
    }
`;
