'use client';

import styled from 'styled-components';

import { WHITE } from '@Styles/colors';
import { Button } from '@Atoms/Button';

const BgColorTypeArray = ['blue', 'white'] as const;
export type BgColorType = (typeof BgColorTypeArray)[number];

interface FormButtonContainerProp {
    width?: string;
    height?: string;
    bgColor?: BgColorType;
}

export const FormButtonContainer = styled(Button)<FormButtonContainerProp>`
    border-radius: 6px;

    padding: 0 12px;
    width: ${({ width }) => width ?? '100%'};
    height: ${({ height }) => height ?? '50px'};

    ${({ bgColor }) => getColorTheme(bgColor ?? 'blue')}
    font-size: 20px;
    font-weight: 500;
    color: white;

    &: disabled {
        background-color: #666666;
    }

    transition: background 0.2s;
`;

const getColorTheme = (bgColor: BgColorType) => {
    switch (bgColor) {
        case 'white':
            return `
                color: #757575;
                background-color: ${WHITE};
                &: hover {
                    background-color: #eeeeee;
                }
            `;
        case 'blue':
        default:
            return `
                color: ${WHITE};
                background-color: #014CF6;
                &: hover {
                    background-color: #336ff7;
                }
            `;
    }
};
