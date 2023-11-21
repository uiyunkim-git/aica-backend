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
    gap: 40px;
    align-items: center;

    max-width: 1240px;
    height: 50%;
    padding: 28px 24px;

    overflow-y: overlay;
`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 200px;
`
export const Label = styled.div`
    font-size: 16px;
    color: #888888;
    font-weight: 400;
    padding-left: 20px;
`

export const Text = styled.span<{ isOrigin: boolean }>`
    padding: 16px 20px;
    border-radius: 12px;
    width: 100%;
    
    height: 100%;
    flex: 1;
    overflow-y: overlay;
    line-height: 140%;
    font-weight: 400;
    font-size: 24px;
    color: #555555;
    ${({ isOrigin }) =>
        isOrigin
            ? 'border: 1px solid #DDDDDD;'
            : 'background-color: #F4f4f4;'};
`;
