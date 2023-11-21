'use client';

import { styled } from 'styled-components';

import { Container } from '@Atoms/Container';
import { Text } from '@Atoms/Typography';
import { Button } from '@Atoms/Button';

export const SignupInputFieldContainer = styled(Container)`
    gap: 13px;
`;

export const InvalidPWNotice = styled(Text)`
    width: fit-content;
    flex-shrink: 0;
    color: #e10000;
    font-size: 14px;
    font-family: Pretendard Variable;
    font-weight: 500;
`;

export const VisibilityButton = styled(Button)`
    background: none;
    justify-content: center;
    align-items: center;
    padding: 5px;

    border-radius: 100%;

    &: hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

export const PWConstraintContainer = styled(Container)`
    gap: 3px;
    align-items: flex-start;
    width: 100%;
`;

export const FormatNotice = styled(Text)<{ isSatisfied: boolean }>`
    align-self: flex-start;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    font-family: Pretendard Variable;
    font-weight: 400;
    padding-left: 10px;
    ${({ isSatisfied }) =>
        isSatisfied
            ? `
        color: #757575;
        path {
            fill: #757575;
        }
    `
            : `
        color: #E10000; 
        path {
            fill: #E10000;
        }
    `};
`;
