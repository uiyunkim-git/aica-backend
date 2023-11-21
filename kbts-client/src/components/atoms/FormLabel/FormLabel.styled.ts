'use client';

import styled from 'styled-components';

import { WHITE } from '@Styles';
import { Text } from '@Atoms/Typography';

export const FormLabel = styled(Text)`
    font-size: 35px;
    font-weight: 600;
    color: ${WHITE};
    margin: 8px 0;
    line-height: 26px;

    user-select: none;
`;
