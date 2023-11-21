'use client';

import styled, { css } from 'styled-components';
import { MouseEventHandler } from 'react';

import { Box } from '@Atoms/Box';
import {
    BLACK1,
    BLUE1,
    BLUE2,
    GRAY2,
    GREEN0,
    GREEN1,
    GREEN2,
    YELLOW1,
    YELLOW2,
} from '@Styles/colors';
import { Caption2, SubHeading1, SubHeading2 } from '@Styles/fonts';

export const ChipSizeTypeArray = ['large', 'small'] as const;
export type ChipSizeType = (typeof ChipSizeTypeArray)[number];

export const ChipColorTypeArray = [
    'black',
    'yellow',
    'green',
    'green2',
    'blue',
] as const;
export type ChipColorType = (typeof ChipColorTypeArray)[number];

export const BaseChip = styled.div<{
    size: ChipSizeType;
    color: ChipColorType;
    onlyIcon?: boolean;
    onlyText?: boolean;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLDivElement>;
    thin?: boolean;
}>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    white-space: nowrap;

    ${({ size, onlyIcon, onlyText, thin }) =>
        handleChipSizeType(size, onlyIcon, onlyText, thin)}
    color: ${({ color, active }) =>
        handleChipColorType(active ? 'blue' : color)};
    background-color: ${({ color, active }) =>
        handleChipColorTypeBackground(active ? 'blue' : color)};
    .icon-box {
        svg {
            path {
                fill: ${({ color, active }) =>
                    handleChipColorType(active ? 'blue' : color)};
            }
        }
    }

    cursor: ${({ onClick }) => onClick && 'pointer'};
`;

export const IconBox = styled(Box)`
    width: 20px;
    height: 20px;
    svg {
        width: 100%;
        height: 100%;
    }
`;

const handleChipSizeType = (
    size: ChipSizeType,
    onlyIcon?: boolean,
    onlyText?: boolean,
    thin?: boolean,
) => {
    switch (size) {
        case 'small':
            return css`
                ${thin ? Caption2 : SubHeading2}
                gap: 4px;
                ${thin ? '' : 'height: 32px;'}
                border-radius: 16px;
                padding: 6px 12px 6px 10px;
                .icon-box {
                    width: 16px;
                    height: 16px;
                }
                ${onlyIcon &&
                css`
                    padding: 8px;
                `}
                ${onlyText &&
                css`
                    padding: 6px 12px;
                `}
        ${thin &&
                css`
                    padding: 2px 8px;
                `}
            `;
        case 'large':
        default:
            return css`
                ${SubHeading1}
                gap: 8px;
                height: 40px;
                border-radius: 21px;
                padding: 10px 20px 10px 16px;
                .icon-box {
                    width: 20px;
                    height: 20px;
                }
                ${onlyIcon &&
                css`
                    padding: 10px;
                `}
                ${onlyText &&
                css`
                    padding: 10px 20px;
                `}
            `;
    }
};

const handleChipColorType = (color: ChipColorType | 'blue') => {
    switch (color) {
        case 'blue':
            return BLUE1;
        case 'green':
            return GREEN1;
        case 'green2':
            return GREEN0;
        case 'yellow':
            return YELLOW1;
        case 'black':
        default:
            return BLACK1;
    }
};

const handleChipColorTypeBackground = (color: ChipColorType | 'blue') => {
    switch (color) {
        case 'blue':
            return BLUE2;
        case 'green':
        case 'green2':
            return GREEN2;
        case 'yellow':
            return YELLOW2;
        case 'black':
        default:
            return GRAY2;
    }
};
