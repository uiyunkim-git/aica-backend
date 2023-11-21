'use client';

import styled, { css, keyframes } from 'styled-components';

import { Container } from '@Atoms/Container';

export const LoadingContainer = styled(Container)`
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const Shimmer = keyframes`
    80% {transform: translateX(100%);}
    100% {transform: translateX(100%);}
`;

export const SkeletonLoader = css`
    position: relative;
    ::after {
        position: absolute;
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99;
        width: 100%;
        height: 100%;
        border-radius: 40%;
        transform: translateX(-100%);
        background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.3) 30%,
            rgba(255, 255, 255, 0.5) 60%,
            rgba(255, 255, 255, 0)
        );
        animation: ${Shimmer} 2.5s ease-in-out infinite;
    }
`;
