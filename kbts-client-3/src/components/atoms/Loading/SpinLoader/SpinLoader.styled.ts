'use client';

import styled, { css, keyframes } from 'styled-components';

import { colorPicker, ColorType } from '@Styles/colors';

export const SpinLoaderSizeTypeArray = [
    'large',
    'medium',
    'small',
    'xsmall',
] as const;
export type SpinLoaderSizeType = (typeof SpinLoaderSizeTypeArray)[number];

export const SpinLoaderConatiner = styled.div<{
    size: SpinLoaderSizeType;
    color: ColorType;
}>`
    display: inline-block;
    position: relative;
    ${({ size }) => handleSpinLoaderSizeType(size)}
    div {
        border-color: ${({ color }) => colorPicker(color)} transparent
            transparent transparent;
    }
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpin = styled.div<{ delay: number }>`
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;

    border-radius: 50%;

    animation: ${Spin} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    animation-delay: ${({ delay }) => delay}s;
`;

const handleSpinLoaderSizeType = (size: SpinLoaderSizeType) => {
    switch (size) {
        case 'xsmall':
            return css`
                width: 20px;
                height: 20px;
                div {
                    border: 2px solid;
                }
            `;
        case 'small':
            return css`
                width: 24px;
                height: 24px;
                div {
                    border: 3px solid;
                }
            `;
        case 'medium':
            return css`
                width: 32px;
                height: 32px;
                div {
                    border: 4px solid;
                }
            `;
        case 'large':
        default:
            return css`
                width: 40px;
                height: 40px;
                div {
                    border: 5px solid;
                }
            `;
    }
};
