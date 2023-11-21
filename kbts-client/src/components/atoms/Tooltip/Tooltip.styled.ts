'use client';

import styled, { css, keyframes } from 'styled-components';

import { colorPicker } from '@Styles/colors';
import { Body3 } from '@Styles/fonts';

export const TooltipSizeTypeArray = ['large', 'small'] as const;
export type TooltipSizeType = (typeof TooltipSizeTypeArray)[number];

export const TooltipColorTypeArray = [
    'black1',
    'red1',
    'blue1',
    'green1',
    'yellow1',
] as const;
export type TooltipColorType = (typeof TooltipColorTypeArray)[number];

export const TooltipDirectionTypeArray = [
    'top-right',
    'top-center',
    'top-left',
    'bottom-right',
    'bottom-center',
    'bottom-left',
    'right-top',
    'right-center',
    'right-bottom',
    'left-top',
    'left-center',
    'left-bottom',
] as const;
export type TooltipDirectionType = (typeof TooltipDirectionTypeArray)[number];

export const TooltipContainer = styled.div<{ show: boolean }>`
    position: relative;
    width: fit-content;
    height: fit-content;
    ${({ show }) =>
        show &&
        css`
            z-index: 99999;
        `};

    &:hover > .tooltip,
    &:active > .tooltip {
        display: flex;
    }
`;

const LatePop = keyframes`
  0% { opacity: 0; }
  40% { opacity: 0; }
  100% { opacity: 1; }
`;

export const Content = styled.div<{
    size: TooltipSizeType;
    color: TooltipColorType;
    direction: TooltipDirectionType;
}>`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    z-index: 99;
    border-radius: 8px;
    background-color: ${({ color }) => colorPicker(color)};
    ${({ size }) => handleTooltipSizeType(size)};

    white-space: nowrap;
    ${Body3};
    color: white;

    ${({ direction }) => handleTooltipDirectionType(direction)}
    animation: ${LatePop} 0.2s;
`;

// For Tooltip Direction
const TopRight = css`
    top: 0;
    left: 0%;
    transform: translateX(0%) translateY(-100%);
    margin-top: -4px;
`;
const TopCenter = css`
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-100%);
    margin-top: -4px;
`;
const TopLeft = css`
    top: 0;
    left: 100%;
    transform: translateX(-100%) translateY(-100%);
    margin-top: -4px;
`;

const BottomRight = css`
    top: 100%;
    left: 0%;
    transform: translateX(0%) translateY(0%);
    margin-top: 4px;
`;
const BottomCenter = css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%) translateY(0%);
    margin-top: 4px;
`;
const BottomLeft = css`
    top: 100%;
    left: 100%;
    transform: translateX(-100%) translateY(0%);
    margin-top: 4px;
`;

const LeftTop = css`
    top: 100%;
    left: 0;
    transform: translateX(-100%) translateY(-100%);
    margin-left: -4px;
`;
const LeftCenter = css`
    top: 50%;
    left: 0;
    transform: translateX(-100%) translateY(-50%);
    margin-left: -4px;
`;
const LeftBottom = css`
    top: 0;
    left: 0;
    transform: translateX(-100%) translateY(0%);
    margin-left: -4px;
`;

const RightTop = css`
    top: 100%;
    left: 100%;
    transform: translateX(0%) translateY(-100%);
    margin-left: 4px;
`;
const RightCenter = css`
    top: 50%;
    left: 100%;
    transform: translateX(0%) translateY(-50%);
    margin-left: 4px;
`;
const RightBottom = css`
    top: 0%;
    left: 100%;
    transform: translateX(0%) translateY(0%);
    margin-left: 4px;
`;

export const handleTooltipDirectionType = (direction: TooltipDirectionType) => {
    switch (direction) {
        case 'top-right':
            return TopRight;
        case 'top-center':
            return TopCenter;
        case 'top-left':
            return TopLeft;
        case 'bottom-right':
            return BottomRight;
        case 'bottom-center':
            return BottomCenter;
        case 'bottom-left':
            return BottomLeft;
        case 'right-top':
            return LeftTop;
        case 'right-center':
            return LeftCenter;
        case 'right-bottom':
            return LeftBottom;
        case 'left-top':
            return RightTop;
        case 'left-center':
            return RightCenter;
        case 'left-bottom':
            return RightBottom;
        default:
            return BottomCenter;
    }
};

const handleTooltipSizeType = (size: TooltipSizeType) => {
    switch (size) {
        case 'large':
            return css`
                padding: 12px 14px;
            `;
        case 'small':
        default:
            return css`
                padding: 8px 12px;
            `;
    }
};
