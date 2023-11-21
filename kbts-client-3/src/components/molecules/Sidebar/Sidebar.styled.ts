'use client';

import styled, { keyframes } from 'styled-components';

import { WHITE_BACKGROUND } from '@Styles/themes';

const slideIn = keyframes`
  from {
    right: -360px;
  }
  to {
    right: 0;
  }
`;

const slideOut = keyframes`
  from {
    right: 0;
  }
  to {
    right: -360px;
  }
`;

export const SidebarContainer = styled.div<{
    show: boolean;
    slide: boolean;
}>`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    ${WHITE_BACKGROUND}
    height: 100%;
    transition: right 0.5s;
    padding: 16px;
    width: 360px;
    animation: ${({ slide }) => (slide ? slideIn : slideOut)} 0.2s ease-in-out;
`;
