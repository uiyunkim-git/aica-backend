'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';
import { Text } from '@Atoms/Typography';
import { Divider } from '@Atoms/Divider';

export const OrDividerContainer = styled(Box)<{
    width?: string;
    height?: string;
    margin?: string;
}>`
    align-items: center;
    justify-content: center;
    gap: 7px;

    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '100%'};

    margin-top: ${({ margin }) => margin};
    margin-bottom: ${({ margin }) => margin};
`;

export const OrDividerLine = styled(Divider)`
    height: 2px;
`;

export const OrDividerText = styled(Text)`
    font-size: 22px;
    font-weight: 700;
`;
