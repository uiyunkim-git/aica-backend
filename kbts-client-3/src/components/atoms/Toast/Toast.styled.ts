'use client';

import styled, { keyframes } from 'styled-components';

import { Box } from '@Atoms/Box';
import { Body2 } from '@Styles/fonts';
import { colorPicker } from '@Styles/colors';
import { SHADOW_HARD } from '@Styles/themes';

export const ToastColorTypeArray = [
    'black1',
    'red1',
    'blue1',
    'green1',
    'yellow1',
] as const;
export type ToastColorType = (typeof ToastColorTypeArray)[number];

const MoveUp = () => keyframes`
  0% {
    margin-bottom: -56px;
    opacity: 0.5;
  }
  60% {
    opacity: 1;
  }
  100% {
    margin-bottom: 0;
    
  }
`;

const FadeOut = () => keyframes`
  0% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const BaseToast = styled(Box)<{
    show: boolean;
    color: ToastColorType;
    duration?: number;
}>`
    justify-content: center;
    align-items: center;
    gap: 10px;

    padding: 16px 20px;
    border-radius: 8px;
    ${SHADOW_HARD}

    ${Body2}
  color: white;
    white-space: nowrap;
    background-color: ${({ color }) => colorPicker(color)};

    animation: ${({ show }) => (show ? MoveUp : FadeOut)} 0.8s forwards;
`;
