import { useHotkeys } from 'react-hotkeys-hook';
import { useCallback, useEffect, useState } from 'react';

import { Backdrop } from '@Atoms/Backdrop';
import { useOnClickOutside } from '@Hooks';
import { SidebarContainer } from './Sidebar.styled';

interface SidebarProp {
    show: boolean;
    setShow: (show: boolean) => void;
    children?: React.ReactNode;
    onCloseCallback?: () => void;
}

export function Sidebar({
    show,
    setShow,
    children,
    onCloseCallback,
}: SidebarProp) {
    const [sidebarShow, setSidebarShow] = useState(false);

    useHotkeys(
        'esc',
        () => {
            if (show) {
                onClose();
            }
        },
        [show],
    );

    const onClose = useCallback(() => {
        setShow(false);
        if (onCloseCallback) {
            onCloseCallback();
        }
    }, [onCloseCallback, setShow]);

    useEffect(() => {
        if (show) {
            setSidebarShow(true);
        } else {
            setTimeout(() => {
                setSidebarShow(false);
            }, 150);
        }
    }, [show]);

    const ref = useOnClickOutside<HTMLDivElement>(onClose);

    return (
        <Backdrop show={sidebarShow}>
            <SidebarContainer slide={show} show={sidebarShow} ref={ref}>
                {children}
            </SidebarContainer>
        </Backdrop>
    );
}
