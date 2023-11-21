import { StaticImageData } from 'next/image';

import { ProfileContainer, ProfileName } from './Profile.styled';
import { ProfileImage } from '@Atoms/ProfileImage';

interface ProfileProp {
    name?: string;
    image?: StaticImageData;
}

export function Profile({ name, image }: ProfileProp) {
    return (
        <ProfileContainer>
            <ProfileImage image={image} />
            <ProfileName>{name}</ProfileName>
        </ProfileContainer>
    );
}
