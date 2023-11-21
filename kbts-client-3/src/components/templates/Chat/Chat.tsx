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
    third_text: string;
};

export function Chat() {
    const { data } = useQuery<ResponseType>({
        queryKey: ['courseData'],
        queryFn: async () => {
            const { data } = await fetch(`http://localhost:8000/`).then((res) =>
                res.json(),
            );
            return data;
        },
        refetchInterval: 100,
    });

    return (
        <Background>
            <Container>
                <TextContainer>
                    <Label>원본 텍스트</Label>
                    <Text isOrigin>
                        {data?.original_text}
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Label>번역 텍스트</Label>
                    <Text isOrigin={false}>
                        {data?.translated_text}
                    </Text>
                </TextContainer>
                <TextContainer>
                    <Label>몰라 텍스트</Label>
                    <Text isThird>
                        {data?.third_text}
                    </Text>
                </TextContainer>
            </Container>
        </Background>
    );
}
