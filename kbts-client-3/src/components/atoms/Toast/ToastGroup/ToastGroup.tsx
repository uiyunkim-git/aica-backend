import { ToastGroupContainer } from './ToastGroup.styled';

interface ToastGroupProp {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    children?: React.ReactNode;
    className?: string;
}

export function ToastGroup({
    top,
    bottom = '32px',
    right,
    left = '276px',
    children,
    className,
}: ToastGroupProp) {
    return (
        <ToastGroupContainer
            id="toast-group"
            className={className}
            top={top}
            bottom={bottom}
            right={right}
            left={left}
        >
            {children}
        </ToastGroupContainer>
    );
}
