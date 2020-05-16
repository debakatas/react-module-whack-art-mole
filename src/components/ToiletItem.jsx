import React from 'react';
import styled from 'styled-components';
import randomInRange from '../utils/random';

const StyledFigure = styled.figure`
    position: relative;

    img {
        width: 100%;
        object-fit: contain;
    }

    .toilet {
        max-height: 80px;
    }
`;

const StyledDiv = styled.div`
    position: absolute;
    height: 300%;
    width: 78%;
    left: 50%;
    transform: translateX(-50%);
    bottom: 45%;
    overflow: hidden;
    clip-path: ellipse(85% 41% at 50% 60%);
`;

const StyledMole = styled.img`
    float: right;
    position: absolute;
    width: 100%;
    bottom: ${(props) => (props.show ? '0' : '-100%')};
    left: 0;
    cursor: pointer;

    &:hover {
        filter: drop-shadow(0 0 2px #fff);
    }
`;

const ToiletItem = ({
    activeArtist,
    artists,
    up,
    fake,
    setLives,
    setPoints,
    id,
    setMoles,
}) => {
    const fakeArtist =
        artists[randomInRange(artists.length - 1)];

    return (
        <StyledFigure>
            <StyledDiv>
                <StyledMole
                    src={`../src/assets/${activeArtist}/mole.png`}
                    alt=""
                    className="mole"
                    show={up}
                    onClick={() => {
                        setPoints((prev) => prev + 10);
                        setMoles((prev) => ({
                            ...prev,
                            [id]: {
                                fake: false,
                                up: false,
                            },
                        }));
                    }}
                />

                <StyledMole
                    src={`../src/assets/${fakeArtist}/mole.png`}
                    alt=""
                    className="mole"
                    show={fake}
                    onClick={() =>
                        setLives((prev) => prev - 1)
                    }
                />
            </StyledDiv>

            <img
                className="toilet"
                src="../src/assets/toilet.png"
                alt=""
            />
        </StyledFigure>
    );
};

export default ToiletItem;
