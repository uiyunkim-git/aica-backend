import { BaseDuplicateCheckButton } from './DuplicateCheckButton.styled';
import CheckIcon from '@Icons/check-circle.svg';
import WarnIcon from '@Icons/circle-warning.svg';

interface DuplicateCheckButtonProp {
    disabled?: boolean;
    isValid?: boolean;
    onClick?: () => void;
}

export function DuplicateCheckButton({
    disabled,
    isValid,
    onClick,
}: DuplicateCheckButtonProp) {
    if (isValid === undefined)
        return (
            <BaseDuplicateCheckButton
                isValid={isValid}
                disabled={disabled}
                onClick={onClick}
            >
                <CheckIcon />
                중복확인
            </BaseDuplicateCheckButton>
        );

    if (isValid)
        return (
            <BaseDuplicateCheckButton isValid={isValid} disabled>
                <CheckIcon />
                사용가능
            </BaseDuplicateCheckButton>
        );

    return (
        <BaseDuplicateCheckButton isValid={isValid} disabled>
            <WarnIcon width={22} height={22} />
            사용불가
        </BaseDuplicateCheckButton>
    );
}
