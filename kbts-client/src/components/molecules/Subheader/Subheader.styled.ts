'use client';

import styled from 'styled-components';

import { RowContainer } from '@Atoms/RowContainer';
import { Box } from '@Atoms/Box';
import { Heading3 } from '@Styles/fonts';

export const SubheaderContainer = styled(RowContainer)`
    gap: 8px;
`;

export const HeaderTitleBox = styled(Box)`
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    ${Heading3}
`;

export const HeaderSubBox = styled(Box)``;
