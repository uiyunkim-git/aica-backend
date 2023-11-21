'use client';

import styled, { css } from 'styled-components';

import {
    WHITE_BACKGROUND,
    GRAY4_BACKGROUND,
    BLUE1_BACKGROUND,
    SHADOW_FLAT,
} from '@Styles/themes';
import { Box } from '@Atoms/Box';

export const ToggleSizeTypeArray = ['medium', 'small'] as const;
export type ToggleSizeType = (typeof ToggleSizeTypeArray)[number];

export const ToggleContainer = styled(Box)`
    align-items: center;
`;

export const VisibleToggle = styled.div<{ toggleSize: ToggleSizeType }>`
    position: relative;
    border-radius: 12px;
    border: none;

    ${({ toggleSize }) =>
        toggleSize === 'medium' &&
        css`
            width: 44px;
            height: 24px;
        `}
    ${({ toggleSize }) =>
        toggleSize === 'small' &&
        css`
            width: 28px;
            height: 16px;
        `}
`;

export const Label = styled.label`
    cursor: pointer;
`;

export const BaseToggle = styled.input<{ toggleSize: ToggleSizeType }>`
    width: 0;
    height: 0;
    display: none;
    z-index: -1;
    cursor: pointer;
    ~ ${VisibleToggle} {
        transition: all 240ms ease;
        -webkit-transition: all 240ms ease;
        ${GRAY4_BACKGROUND}
        &::after {
            transition: all 240ms ease;
            -webkit-transition: all 240ms ease;
            content: '';
            display: block;
            border-radius: 10px;
            ${WHITE_BACKGROUND}
            ${SHADOW_FLAT}

      ${({ toggleSize }) =>
                toggleSize === 'medium' &&
                css`
                    width: 20px;
                    height: 20px;
                    margin: 2px;
                `}
      ${({ toggleSize }) =>
                toggleSize === 'small' &&
                css`
                    width: 14px;
                    height: 14px;
                    margin: 1px;
                `}
        }
    }
    &:checked + ${VisibleToggle} {
        ${BLUE1_BACKGROUND}
        &::after {
            ${({ toggleSize }) =>
                toggleSize === 'medium' &&
                css`
                    margin-left: 22px;
                `}
            ${({ toggleSize }) =>
                toggleSize === 'small' &&
                css`
                    margin-left: 13px;
                `}
        }
    }

    &:disabled {
        ~ ${VisibleToggle} {
            opacity: 0.4;
        }
    }
`;

export const TextLabelBox = styled(Box)`
    margin: 0px 10px;

    cursor: pointer;
`;
