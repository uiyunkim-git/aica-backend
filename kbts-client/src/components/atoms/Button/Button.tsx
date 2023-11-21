import { ButtonContainer } from './Button.styled';

interface ButtonProp {
    className?: string;
    children?: React.ReactNode;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    disabled?: boolean;
    stopPropagation?: boolean;
}

export function Button({
    className,
    children,
    onClick,
    disabled,
    stopPropagation,
}: ButtonProp) {
    return (
        <ButtonContainer
            className={className}
            onClick={
                stopPropagation
                    ? (e) => {
                          e?.stopPropagation();
                          if (onClick) onClick();
                      }
                    : onClick
            }
            disabled={disabled}
        >
            {children}
        </ButtonContainer>
    );
}
