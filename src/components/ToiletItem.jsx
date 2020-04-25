import React from 'react';
import styled from 'styled-components';

const StyledFigure = styled.figure`
    position: relative;

    img {
        width: 100%;
        object-fit: contain;
    }

    .mole {
        float: right;
        position: absolute;
        width: 100%;
        bottom: -50%;
        left: 0;
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

const ToiletItem = ({ activeArtist }) => (
    <StyledFigure>
        <StyledDiv>
            <img
                src={`../src/assets/${activeArtist}/mole.png`}
                alt=""
                className="mole"
            />
        </StyledDiv>

        <img
            className="toilet"
            src="../src/assets/toilet.png"
            alt=""
        />
    </StyledFigure>
);

export default ToiletItem;
