'use client';

import styled from 'styled-components';

import { RowContainer } from '@Atoms/RowContainer';

export const TabGroupContainer = styled(RowContainer)<{ width?: string }>`
    justify-content: space-between;
    width: ${({ width }) => width ?? 'fit-content'};
    padding: 16px;
    gap: 8px;
`;
