import { AccountInput } from '@Atoms/AccountInput';
import { LoginInputFieldContainer } from './LoginInputField.styled';

interface LoginInputFieldProp {
    email?: string;
    pw?: string;
    onChangeEmail: (email: string) => void;
    onChangePW: (pw: string) => void;
}
export function LoginInputField({ email, pw, onChangeEmail, onChangePW }: LoginInputFieldProp) {
    return (
        <LoginInputFieldContainer>
            <AccountInput
                type="text"
                onChange={(e) => onChangeEmail(e.target.value ?? '')}
                placeholder="이메일"
                value={email}
            />
            <AccountInput
                type="password"
                onChange={(e) => onChangePW(e.target.value ?? '')}
                placeholder="비밀번호"
                value={pw}
            />
        </LoginInputFieldContainer>
    );
}
