'use client';

import { styled } from 'styled-components';

import { Box } from '@Atoms/Box';
import { WHITE } from '@Styles';

export const PluginLogoWrapper = styled(Box)`
    position: relative;
    align-items: center;
    justify-content: center;
    width: 75px;
    height: 75px;
    border-radius: 7.5px;
    box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.25);

    background: ${WHITE};
    overflow: hidden;
`;
