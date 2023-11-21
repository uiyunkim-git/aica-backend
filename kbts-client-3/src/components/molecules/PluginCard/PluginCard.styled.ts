'use client';

import { styled } from 'styled-components';

import { Container } from '@Atoms/Container';
import { Text } from '@Atoms/Typography';
import { WHITE } from '@Styles';
import { Box } from '@Atoms/Box';

export const PluginCardContainer = styled(Container)`
    flex-shrink: 0;
    // width: 330px;
    // height: 250px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    background-color: #202020;
    box-shadow: 0px 0px 11px 0px rgba(0, 0, 0, 0.25);
`;

export const PluginInfoContainer = styled(Box)`
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 17px;

    width: 100%;
    height: 100%;

    padding: 0 20px 0 25px;
`;

export const PluginLogoTitleContainer = styled(Container)`
    position: absolute;
    bottom: 15px;
    width: 75px;

    align-items: center;
    gap: 10px;
`;

// TODO: merge into Typography after define new font set
// GOOD TO DO: adjust font-size by length of text
export const PluginTitle = styled(Text)`
    max-width: 75px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    color: ${WHITE};
    font-size: 19.54px;
    font-weight: 600;
    line-height: 23.448px;
`;
