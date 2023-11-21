'use client';

import styled, { css } from 'styled-components';

import {
    BLACK1_BACKGROUND,
    GREEN1_BACKGROUND,
    RED1_BACKGROUND,
    WHITE_BACKGROUND,
    YELLOW1_BACKGROUND,
} from '@Styles/themes';
import { RED1, WHITE } from '@Styles/colors';

export const BadgeTypeArray = [
    'help',
    'error',
    'complete',
    'yellowError',
    'whiteError',
    'warning',
] as const;
export type BadgeType = (typeof BadgeTypeArray)[number];

export const BadgeSizeTypeArray = [
    'small',
    'medium',
    'large',
    'x-large',
    '3x-large',
] as const;
export type BadgeSizeType = (typeof BadgeSizeTypeArray)[number];

export const BadgeContainer = styled.div<{
    type: BadgeType;
    size: BadgeSizeType;
}>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    ${({ type }) => handleBadgeType(type)}
    ${({ size }) => handleBadgeSizeType(size)}

  svg {
        path {
            fill: ${({ type }) => (type === 'whiteError' ? RED1 : WHITE)};
        }
        width: 100%;
        height: 100%;
    }
`;

const handleBadgeType = (type: BadgeType) => {
    switch (type) {
        case 'help':
            return css`
                ${BLACK1_BACKGROUND}
            `;
        case 'error':
            return css`
                ${RED1_BACKGROUND}
            `;
        case 'yellowError':
            return css`
                ${YELLOW1_BACKGROUND}
            `;
        case 'whiteError':
            return css`
                ${WHITE_BACKGROUND}
            `;
        case 'warning':
            return css`
                border: 2px solid white;
            `;
        case 'complete':
        default:
            return css`
                ${GREEN1_BACKGROUND}
            `;
    }
};

const handleBadgeSizeType = (size: BadgeSizeType) => {
    switch (size) {
        case '3x-large':
            return css`
                width: 40px;
                height: 40px;
                padding: 5px;
            `;
        case 'x-large':
            return css`
                width: 24px;
                height: 24px;
                padding: 2px;
            `;
        case 'large':
            return css`
                width: 20px;
                height: 20px;
                padding: 2px;
            `;
        case 'small':
            return css`
                width: 12px;
                height: 12px;
                padding: 1px;
            `;
        case 'medium':
        default:
            return css`
                width: 14px;
                height: 14px;
                padding: 1px;
            `;
    }
};
