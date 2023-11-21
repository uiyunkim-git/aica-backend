'use client';

import styled, { css } from 'styled-components';

import {
    GRAY1_BACKGROUND,
    SUB_BLACK1_BACKGROUND,
    WHITE_BACKGROUND,
} from '@Styles/themes';
import { Box } from '@Atoms/Box';
import { Button } from '@Atoms/Button';

export const SegmentedButtonGroup = styled(Box)<{ darkTheme?: boolean }>`
    padding: 2px;
    border-radius: 8px;
    ${({ darkTheme }) => (darkTheme ? SUB_BLACK1_BACKGROUND : GRAY1_BACKGROUND)}
`;

export const BaseSegmentedButton = styled(Button)<{
    active?: boolean;
    isDarkTheme?: boolean;
}>`
    height: 36px;
    span {
        opacity: 0.4;
    }
    :hover,
    :active {
        span {
            opacity: 1;
        }
    }

    ${({ active, isDarkTheme }) =>
        active &&
        (isDarkTheme
            ? css`
                  span {
                      opacity: 1;
                  }
                  ::after {
                      opacity: 0.3;
                  }
                  :hover:enabled,
                  :active:enabled {
                      ::after {
                          opacity: 0.3;
                      }
                  }
              `
            : css`
                  ${WHITE_BACKGROUND}
                  span {
                      opacity: 1;
                  }
                  :hover:enabled,
                  :active:enabled {
                      ::after {
                          opacity: 0;
                      }
                  }
              `)}
`;
