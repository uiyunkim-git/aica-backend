import { forwardRef } from 'react';

import { GridContainer } from './Grid.styled';

interface GridProp extends React.ComponentProps<'div'> {
    className?: string;
    children?: React.ReactNode;
}

export const Grid = forwardRef<HTMLDivElement, Omit<GridProp, 'ref'>>(
    ({ className, children, ...rest }, ref) => {
        return (
            <GridContainer ref={ref} className={className} {...rest}>
                {children}
            </GridContainer>
        );
    },
);
Grid.displayName = 'Grid';
