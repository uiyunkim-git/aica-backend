'use client';

import styled from 'styled-components';

export const ToastGroupContainer = styled.div<{
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    position: fixed;
    top: ${({ top }) => top};
    bottom: ${({ bottom }) => bottom};
    right: ${({ right }) => right};
    left: ${({ left }) => left};
`;
