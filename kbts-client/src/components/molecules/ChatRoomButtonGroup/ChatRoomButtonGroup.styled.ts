'use client';

import styled from 'styled-components';

import { Box } from '@Atoms/Box';
import { Button } from '@Atoms/Button';

export const ChatRoomButtonGroupContainer = styled(Box)`
    display: none;
    align-items: center;
    gap: 10px;
`;

export const ChatRoomButton = styled(Button)`
    background: none;
    width: 30px;
    height: 30px;
    border-radius: 6px;
    &: hover {
        background: #757575;
    }
`;
