'use client';

import styled from 'styled-components';

import { Box } from '@Atoms/Box';

export const SeriesButtonGroupContainer = styled(Box)`
    gap: 2px;

    & > * {
        border-radius: 0px;
        & > button,
        & > button::after,
        .series-btn-tooltip > button,
        .series-btn-tooltip > button::after {
            border-radius: 0px;
        }
        ::after {
            border-radius: 0px;
        }

        :first-child,
        :first-child:after,
        :first-child > button,
        :first-child > button::after,
        :first-child .series-btn-tooltip > button,
        :first-child .series-btn-tooltip > button::after {
            border-radius: 8px 0px 0px 8px;
        }

        :last-child,
        :last-child:after,
        :last-child > button,
        :last-child > button::after,
        :last-child .series-btn-tooltip > button,
        :last-child .series-btn-tooltip > button::after {
            border-radius: 0px 8px 8px 0px;
        }

        :only-child,
        :only-child:after,
        :only-child > button,
        :only-child > button::after,
        :only-child .series-btn-tooltip > button,
        :only-child .series-btn-tooltip > button::after {
            border-radius: 8px;
        }
    }
`;
