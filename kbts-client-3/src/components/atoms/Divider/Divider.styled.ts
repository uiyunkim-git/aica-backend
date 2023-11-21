'use client';

import styled from 'styled-components';

import { LIGHT_GRAY_BACKGROUND } from '@Styles/themes';

export const BaseDivider = styled.div<{
    height?: string;
    width?: string;
    margin?: string;
}>`
    width: ${({ width }) => width ?? '100%'};
    min-height: ${({ height }) => height ?? '1px'};
    margin-top: ${({ margin }) => margin};
    margin-bottom: ${({ margin }) => margin};
    ${LIGHT_GRAY_BACKGROUND};
`;

export const VerticalBaseDivider = styled.div<{
    width?: string;
    height?: string;
    margin?: string;
}>`
    height: ${({ height }) => height ?? '100%'};
    min-width: ${({ width }) => width ?? '1px'};
    margin-left: ${({ margin }) => margin};
    margin-right: ${({ margin }) => margin};
    ${LIGHT_GRAY_BACKGROUND};
`;
