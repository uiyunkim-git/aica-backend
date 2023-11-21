'use client';

import styled from 'styled-components';

import { ColorType, colorPicker } from '@Styles/colors';
import { TextSizeType, textSizePicker } from '@Styles/fonts';

export const Text = styled.span<{
    size?: TextSizeType;
    color?: ColorType;
    bold?: boolean;
    $notSelectable?: boolean;
}>`
    text-decoration: none;
    vertical-align: center;
    height: fit-content;
    z-index: 0;
    pointer-events: none;
    font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};

    color: ${({ color }) => colorPicker(color)};
    ${({ size }) => textSizePicker(size)}
    user-select: ${({ $notSelectable }) => ($notSelectable ? 'none' : 'auto')};
`;
