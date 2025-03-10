import styled from 'styled-components';

const AvatarContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledFaceContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 26px;
    height: 26px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const StyledFrameContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

export interface AvatarIconProps {
    alt?: string;
    FaceComponent: string;
    FrameComponent: string;
}

export const AvatarIcon = ({FaceComponent, FrameComponent, alt}: AvatarIconProps) => {
    return (
        <AvatarContainer>
            <StyledFaceContainer>
                <img src={FaceComponent} alt={alt || 'Avatar face'}/>
            </StyledFaceContainer>
            <StyledFrameContainer>
                <img src={FrameComponent} alt="Avatar frame" />
            </StyledFrameContainer>
        </AvatarContainer>
    );
};
