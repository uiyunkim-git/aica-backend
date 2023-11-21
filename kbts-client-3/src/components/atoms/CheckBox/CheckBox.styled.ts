'use client';

import styled from 'styled-components';

import { Text } from '@Atoms/Typography';
import { colorPicker, ColorType } from '@Styles/colors';
import { textSizePicker, TextSizeType } from '@Styles/fonts';
import { Box } from '@Atoms/Box';

export const CheckBoxContainer = styled(Box)`
    align-items: center;
`;

export const CheckBoxLabelText = styled(Text)<{
    labelSize?: TextSizeType;
    labelColor?: ColorType;
}>`
    ${({ labelSize }) =>
        labelSize
            ? textSizePicker(labelSize)
            : `
        font-size: 14px;
        font-weight: 500;
    `}
    color: ${({ labelColor }) =>
        labelColor ? colorPicker(labelColor) : '#D9D9D9'};
`;

export const Label = styled.label`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    height: 25px;

    &:before {
        content: '';
        height: 25px;
        width: 25px;
        background-color: none;
        border: 2px solid #b0b0b0;
        border-radius: 4px;
        box-sizing: border-box;
    }

    &:after {
        display: flex;
        justify-content: center;
        align-items: center;

        opacity: 0;
        content: '';
        position: absolute;
        height: 25px;
        width: 25px;
        border-radius: 4px;

        background-image: url('/assets/icons/check.svg');
        background-size: 80% 50%;
        background-repeat: no-repeat;
        background-position: center;

        box-sizing: border-box;
    }
`;

export const CheckBoxInput = styled.input`
    position: absolute;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    width: 1px;

    &:not(:checked) + ${Label} {
        &:after {
            opacity: 0;
            transform: scale(0);
        }
    }
    &:checked + ${Label} {
        &:before {
            background: #014cf6;
            border: none;
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
