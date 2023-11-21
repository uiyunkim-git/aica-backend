'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';
import { Text } from '@Atoms/Typography';
import { WHITE } from '@Styles';

export const ProfileContainer = styled(Box)`
    align-items: center;
    gap: 16px;
`;

export const ProfileName = styled(Text)`
    color: ${WHITE};
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
`;
