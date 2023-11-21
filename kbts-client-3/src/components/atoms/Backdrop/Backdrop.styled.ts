'use client';

import styled, { css } from 'styled-components';

export const showBackdrop = css`
    visibility: visible;
    opacity: 1;
`;

export const noShowBackdrop = css`
    visibility: hidden;
    opacity: 0;
`;

export const BaseBackdrop = styled.div<{ show: boolean }>`
    cursor: default;
    display: ${({ show }) => (show ? 'flex' : 'none')};
    ${({ show }) => (show ? showBackdrop : noShowBackdrop)}
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.4);
    transition: visibility 0s, opacity 0.2s cubic-bezier(0, 0, 0, 1);
`;
