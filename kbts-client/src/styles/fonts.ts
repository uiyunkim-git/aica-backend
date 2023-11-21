import { css } from 'styled-components';

export const Heading1 = css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
`;

export const Heading2 = css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 20px;
    line-height: 28px;
`;

export const Heading3 = css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
`;

export const Heading4 = css`
    font-family: 'Pretendard';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`;

export const SubHeading1 = css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
`;

export const SubHeading2 = css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
`;

export const Body1 = css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;

export const Body2 = css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`;

export const Body3 = css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
`;

export const Caption1 = css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 13px;
    line-height: 22px;
`;

export const Caption2 = css`
    font-family: 'Pretendard';
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
`;

export const Button1 = css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
`;

export const Button2 = css`
    font-family: 'Pretendard';
    font-weight: 600;
    font-size: 12px;
    line-height: 12px;
`;

export const TextSizeArray = [
    'h1',
    'h2',
    'h3',
    'h4',
    'sh1',
    'sh2',
    'b1',
    'b2',
    'b3',
    'c1',
    'c2',
    'btn1',
    'btn2',
] as const;
export type TextSizeType = (typeof TextSizeArray)[number];

export const textSizePicker = (size?: TextSizeType) => {
    switch (size) {
        case 'h1':
            return Heading1;
        case 'h2':
            return Heading2;
        case 'h3':
            return Heading3;
        case 'h4':
            return Heading4;
        case 'sh1':
            return SubHeading1;
        case 'sh2':
            return SubHeading2;
        case 'b1':
            return Body1;
        case 'b2':
            return Body2;
        case 'b3':
            return Body3;
        case 'c1':
            return Caption1;
        case 'c2':
            return Caption2;
        case 'btn1':
            return Button1;
        case 'btn2':
            return Button2;
        default:
            return Body3;
    }
};
