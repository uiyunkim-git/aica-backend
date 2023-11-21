'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';

export const LogoWrapper = styled(Box)<{ width?: string; height?: string }>`
    position: relative;
    width: ${({ width }) => width ?? '100px'};
    height: ${({ height }) => height ?? '15px'};
`;
