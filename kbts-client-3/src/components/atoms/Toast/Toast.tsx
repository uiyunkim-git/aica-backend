import { useEffect, useRef, useState } from 'react';
import { render } from 'react-dom';

import { ToastColorType, BaseToast } from './Toast.styled';
import { ToastGroup } from './ToastGroup';

interface ToastProp {
    duration: number;
    color?: ToastColorType;
    children?: React.ReactNode;
    className?: string;
}

export function Toast({
    duration,
    color = 'blue1',
    children,
    className,
}: ToastProp) {
    const ref = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState<boolean>(true);

    const close = () => {
        setShow(false);
        observer.disconnect();
    };

    const observer = new MutationObserver(() => {
        if (ref.current?.parentElement?.nextSibling?.nextSibling) {
            close();
        }
    });

    useEffect(() => {
        const toastGroup = document.getElementById('toast-group');
        if (toastGroup) {
            observer.observe(toastGroup, { childList: true });
        }

        setTimeout(() => {
            close();
        }, duration * 1000);
    }, []);

    return (
        <BaseToast
            ref={ref}
            show={show}
            className={className}
            color={color}
            duration={duration}
        >
            {children}
        </BaseToast>
    );
}

interface positionProp {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
}

const initToast = ({ top, bottom, right, left }: positionProp) => {
    const toastGroupWrapper = document.createElement('div');
    toastGroupWrapper.setAttribute('id', 'toast-group-container');
    document.body.appendChild(toastGroupWrapper);

    render(
        <ToastGroup top={top} bottom={bottom} right={right} left={left} />,
        toastGroupWrapper,
    );
};

let suppressToast = false;

export const suppressToastToggle = (force = false) => {
    if (force) {
        suppressToast = force;
    } else {
        suppressToast = !suppressToast;
    }
};

export const makeToast = async (
    message: string,
    color?: ToastColorType,
    duration = 2,
) => {
    if (suppressToast) {
        return;
    }

    const toastGroupWrapper = document.getElementById('toast-group-container');
    if (!toastGroupWrapper) {
        initToast({});
    }

    const toastGroup = document.getElementById('toast-group');

    if (toastGroup) {
        const toastBox = document.createElement('div');
        toastGroup.appendChild(toastBox);
        toastGroup.style.zIndex = '99999';

        render(
            <Toast color={color} duration={duration}>
                {message}
            </Toast>,
            toastBox,
        );

        setTimeout(() => {
            toastBox.remove();
        }, (duration + 2) * 1000);
    }
};

export const setToastPosition = ({
    top,
    bottom,
    right,
    left,
}: positionProp) => {
    const toastGroupWrapper = document.getElementById('toast-group-container');
    if (toastGroupWrapper) {
        toastGroupWrapper.remove();
    }
    initToast({ top, bottom, right, left });
};
