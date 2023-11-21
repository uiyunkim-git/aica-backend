'use client';

import styled from 'styled-components';

import { Box } from '@Atoms/Box';
import { DARK_GRAY } from '@Styles';

export const PluginImageWrapper = styled(Box)`
    position: relative;
    flex-shrink: 0;
    align-items: flex-end;
    overflow: hidden;
    width: 100%;
    height: 160px;
    background-color: ${DARK_GRAY};
`;

export const PluginImageShadow = styled.div`
    position: absolute;
    width: 100%;
    height: 45px;
    opacity: 0.2;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, black 100%);
`;
