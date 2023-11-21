import { useCallback, useMemo, useState } from 'react';

import { AccountInput } from '@Atoms/AccountInput';
import {
    FormatNotice,
    PWConstraintContainer,
    SignupInputFieldContainer,
    VisibilityButton,
} from './SignupInputField.styled';
import { DuplicateCheckButton } from '@Atoms/DuplicateCheckButton';
import ShowIcon from '@Icons/eye-outline.svg';
import HideIcon from '@Icons/eye-slash-outline.svg';
import WarnIcon from '@Icons/circle-warning.svg';

interface SignupInputFieldProp {
    isEmailFormat?: boolean;
    isEmailUnique?: boolean;
    onClickDupCheck?: () => void;
    isPWFormat?: boolean;
    isPWConfirmed?: boolean;
    email?: string;
    pw?: string;
    pwConfirm?: string;
    onChangeEmail: (email: string) => void;
    onChangePW: (pw: string) => void;
    onChangePWConfirm: (pwConfirm: string) => void;
}
export function SignupInputField({
    isEmailFormat = false,
    isEmailUnique,
    onClickDupCheck,
    isPWFormat = false,
    isPWConfirmed = false,
    email,
    pw,
    pwConfirm,
    onChangeEmail,
    onChangePW,
    onChangePWConfirm,
}: SignupInputFieldProp) {
    const [showPW, setShowPW] = useState<boolean>(false);
    const [showPWConfirm, setShowPWConfirm] = useState<boolean>(false);

    const emailStatus = useMemo(() => {
        if (email === '' || (isEmailFormat && isEmailUnique === undefined))
            return 'default';
        if (isEmailUnique) return 'valid';
        return 'invalid';
    }, [email, isEmailFormat, isEmailUnique]);

    const pwStatus = useMemo(() => {
        if (pw === '' && pwConfirm === '') return 'default';
        if (isPWFormat && isPWConfirmed) return 'valid';
        return 'invalid';
    }, [isPWConfirmed, isPWFormat, pw, pwConfirm]);

    return (
        <SignupInputFieldContainer>
            <AccountInput
                type="text"
                onChange={(e) => onChangeEmail(e.target.value ?? '')}
                placeholder="이메일"
                value={email}
                status={emailStatus}
            >
                <DuplicateCheckButton
                    disabled={!isEmailFormat}
                    isValid={isEmailUnique}
                    onClick={onClickDupCheck}
                />
            </AccountInput>
            <FormatNotice isSatisfied={email === '' || isEmailFormat}>
                이메일 형식을 맞춰주세요.
            </FormatNotice>
            <AccountInput
                type={showPW ? 'text' : 'password'}
                onChange={(e) => onChangePW(e.target.value ?? '')}
                placeholder="비밀번호"
                value={pw}
                status={pwStatus}
            >
                <VisibilityButton onClick={() => setShowPW(!showPW)}>
                    {showPW ? <ShowIcon /> : <HideIcon />}
                </VisibilityButton>
            </AccountInput>
            <AccountInput
                onChange={(e) => onChangePWConfirm(e.target.value)}
                type={showPWConfirm ? 'text' : 'password'}
                placeholder="비밀번호 확인"
                value={pwConfirm}
                status={pwStatus}
            >
                <VisibilityButton
                    onClick={() => setShowPWConfirm(!showPWConfirm)}
                >
                    {showPWConfirm ? <ShowIcon /> : <HideIcon />}
                </VisibilityButton>
            </AccountInput>
            <PWConstraintContainer>
                <FormatNotice
                    isSatisfied={(pw === '' && pwConfirm === '') || isPWFormat}
                >
                    <WarnIcon width={15} height={15} />
                    8자 이상, 대소문자 특수문자 포함
                </FormatNotice>
                <FormatNotice isSatisfied={isPWConfirmed}>
                    <WarnIcon width={15} height={15} />
                    비밀번호 일치
                </FormatNotice>
            </PWConstraintContainer>
        </SignupInputFieldContainer>
    );
}
