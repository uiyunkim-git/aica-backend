'use client';

import styled from 'styled-components';

import { RowContainer } from '@Atoms/RowContainer';
import { BLUE1_BACKGROUND, BLUE2_BACKGROUND } from '@Styles/themes';
import { Box } from '@Atoms/Box';
import { BLACK1 } from '@Styles/colors';
import { Body3 } from '@Styles/fonts';

export const ProgressBarWrapper = styled(RowContainer)`
    width: fit-content;
    gap: 8px;
`;

export const ProgressBarContainer = styled(Box)<{ width: string }>`
    flex: 1;
    height: 24px;
    border-radius: 8px;
    ${BLUE2_BACKGROUND};
    overflow: hidden;
    width: ${({ width }) => width};
`;

export const Progress = styled(Box)<{ progress: number; isInfinity?: boolean }>`
    width: ${({ progress, isInfinity }) => (isInfinity ? 100 : progress)}%;
    ${({ isInfinity }) => (isInfinity ? BLUE1_BACKGROUND : BLUE1_BACKGROUND)}
`;

export const PercentageBox = styled(Box)`
    color: ${BLACK1};
    ${Body3}
`;
