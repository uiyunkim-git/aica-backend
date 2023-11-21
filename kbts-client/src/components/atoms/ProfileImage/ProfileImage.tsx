import Image, { StaticImageData } from 'next/image';

import { ProfileImageWrapper } from './ProfileImage.styled';
import UserCircle from '@Icons/user-circle.svg';

interface ProfileImageProp {
    image?: StaticImageData;
}

export function ProfileImage({ image }: ProfileImageProp) {
    return (
        <ProfileImageWrapper>
            {image === undefined ? (
                <UserCircle width={32} height={32} />
            ) : (
                <Image src={image} alt="profile image" fill />
            )}
        </ProfileImageWrapper>
    );
}
