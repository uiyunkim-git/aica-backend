import { useQuery } from '@tanstack/react-query';

import {
    Background,
    Container,
    Label,
    Text,
    TextContainer,
} from './Chat.styled';

type ResponseType = {
    original_text: string;
    translated_text: string;
};

export function Chat() {
    const { isError, data } = useQuery<ResponseType>({
        queryKey: ['courseData'],
        queryFn: async () => {
            const { data } = await fetch(`http://localhost:3000/api`).then(
                (res) => res.json(),
            );
            return data;
        },
        refetchInterval: 1000,
    });

    return (
        <Background>
            {isError ? (
                <Container>에러 발생</Container>
            ) : (
                <Container>
                    <TextContainer>
                        <Label>원본 텍스트</Label>
                        <Text isOrigin>{data?.original_text}</Text>
                    </TextContainer>
                    <TextContainer>
                        <Label>번역 텍스트</Label>
                        <Text isOrigin={false}>{data?.translated_text}</Text>
                    </TextContainer>
                </Container>
            )}
        </Background>
    );
}
