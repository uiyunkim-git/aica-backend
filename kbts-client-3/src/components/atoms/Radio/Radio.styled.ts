'use client';

import styled from 'styled-components';

import { Text } from '@Atoms/Typography';
import { BLUE1, GRAY4 } from '@Styles/colors';
import {
    BLUE1_BACKGROUND,
    GRAY1_BACKGROUND,
    GRAY2_BACKGROUND,
} from '@Styles/themes';
import { SubHeading1 } from '@Styles/fonts';
import { Box } from '@Atoms/Box';

export const RadioContainer = styled(Box)`
    gap: 6px;
    align-items: center;
`;

export const RadioLabelText = styled(Text)`
    ${SubHeading1}
    color: ${GRAY4};
`;

export const Label = styled.label``;

export const RadioInput = styled.input<{ isAll?: boolean }>`
    display: none;
    & + ${Label} {
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        padding-left: 24px;
        height: 24px;
        border-radius: 50%;
        :hover {
            ${GRAY1_BACKGROUND}
        }
        :active {
            ${GRAY2_BACKGROUND}
        }
        // Box Style
        &:before {
            content: '';
            display: flex;
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            position: absolute;
            left: 4px;
            top: 4px;
            width: 16px;
            height: 16px;
            border: 2px solid ${GRAY4};
            border-radius: 50%;
        }
        // Check Style
        &:after {
            content: '';
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 8px;
            left: 8px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            transition: all 100ms;
            ${BLUE1_BACKGROUND}
        }
    }
    &:not(:checked) + ${Label} {
        &:after {
            opacity: 0;
            transform: scale(0);
        }
    }
    &:checked + ${Label} {
        &:before {
            border: 2px solid ${BLUE1};
        }
        &:after {
            opacity: 1;
            transform: scale(1);
        }
    }
    &:disabled + ${Label} {
        opacity: 0.4;
        :hover,
        :active {
            background: none;
        }
    }
`;
