'use client';

import styled from 'styled-components';

import { RowContainer } from '@Atoms/RowContainer';
import { Button } from '@Atoms/Button';
import { GRAY4 } from '@Styles/colors';

export const PageNavigationContainer = styled(RowContainer)`
    width: fit-content;
    height: 32px;
`;

export const PageButton = styled(Button)<{ page?: number }>`
    width: fit-content;
    min-width: 24px;
    min-height: 24px;
    white-space: nowrap;
    span {
        svg {
            path {
                fill: ${GRAY4};
            }
        }
    }
    padding: ${({ page }) => page && page > 99 && '0px 4px'};
`;
