import {
    AccountButtonContainer,
    AccountButtonText,
} from './AccountButton.styled';

interface AccountButtonProp {
    icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    text?: string;
    onClick?: () => void;
}

export function AccountButton({ icon, text, onClick }: AccountButtonProp) {
    const Icon = icon;
    return (
        <AccountButtonContainer onClick={onClick}>
            {Icon && <Icon width={22} height={22} />}
            <AccountButtonText>{text}</AccountButtonText>
        </AccountButtonContainer>
    );
}
