import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: white;
`;

export const Container = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;

    width: 1440px;
    height: 90%;
    padding: 28px 24px;

    overflow-y: overlay;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
    width: 100%;
`;

export const Label = styled.div`
    font-size: 18px;
    color: #888888;
    font-weight: 400;
    padding-left: 20px;
`;

export const Text = styled.span<{ isOrigin?: boolean; isThird?: boolean }>`
    padding: 16px 20px;
    border-radius: 12px;
    width: 100%;

    word-break: break-all;

    height: 100%;
    flex: 1;
    overflow-y: overlay;
    line-height: 150%;
    font-weight: 400;
    font-size: 24px;
    color: #555555;
    ${({ isOrigin }) =>
        isOrigin ? 'border: 1px solid #DDDDDD;' : 'background-color: #F4f4f4;'};
    ${({ isThird }) =>
        isThird && 'border: 1px solid #AAAAAA;'};
`;
