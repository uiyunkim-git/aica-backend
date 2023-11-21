import { BaseBackdrop } from './Backdrop.styled';

interface BackdropProp {
    show: boolean;
    children?: React.ReactNode;
    className?: string;
}

export function Backdrop({ show, children, className }: BackdropProp) {
    return (
        <BaseBackdrop
            className={className}
            show={show}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </BaseBackdrop>
    );
}
