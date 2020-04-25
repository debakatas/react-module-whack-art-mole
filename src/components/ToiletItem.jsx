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
        bottom: 0;
        left: 0;
    }

    .toilet {
        max-height: 96px;
    }
`;

const ToiletItem = ({ activeArtist }) => (
    <StyledFigure>
        <img
            src={`../src/assets/${activeArtist}/mole.png`}
            alt=""
            className="mole"
        />
        <img
            className="toilet"
            src="../src/assets/toilet.png"
            alt=""
        />
    </StyledFigure>
);

export default ToiletItem;
