import {
    PluginExplanationText,
    PluginExplanationWrapper,
} from './PluginExplanation.styled';

interface PluginExplanationProp {
    text?: string;
}

export function PluginExplanation({ text }: PluginExplanationProp) {
    return (
        <PluginExplanationWrapper>
            <PluginExplanationText>{text}</PluginExplanationText>
        </PluginExplanationWrapper>
    );
}
