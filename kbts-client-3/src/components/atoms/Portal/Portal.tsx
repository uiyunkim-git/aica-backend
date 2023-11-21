import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface PortalProp {
    anchorElementRect?: DOMRect;
    children?: React.ReactNode;
    hidePointerEvents?: boolean;
}

export const Portal = ({
    anchorElementRect,
    children,
    hidePointerEvents,
}: PortalProp) => {
    const { width, height, top, left } = anchorElementRect ?? {};
    const portal = document.getElementById('portal-root');
    const el = document.createElement('div');

    useEffect(() => {
        portal?.appendChild(el);
        return () => {
            portal?.removeChild(el);
        };
    }, [el, portal]);

    return createPortal(
        anchorElementRect ? (
            <div
                style={{
                    pointerEvents: hidePointerEvents ? 'none' : undefined,
                    position: 'relative',
                    width,
                    height,
                    top,
                    left,
                }}
            >
                {children}
            </div>
        ) : (
            children
        ),
        el,
    );
};
