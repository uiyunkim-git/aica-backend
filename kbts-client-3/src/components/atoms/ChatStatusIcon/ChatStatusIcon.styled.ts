'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';

export const ChatStatusIconWrapper = styled(Box)`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
`;

export const NewBadge = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #ff0000;
`;
