import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
    text-align: center;

    &::after {
        content: '';
        display: ${(props) =>
            props.play ? 'none' : 'block'};
        background: rgba(0, 0, 0, 0.6);
        z-index: 10;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
    }

    > h2 {
        --move: ;
        color: white;
        font-family: var(--font-funny);
        font-size: 4rem;
        position: fixed;
        bottom: ${(props) => (props.play ? '0' : '50%')};
        left: 50%;
        z-index: 100;
        cursor: pointer;
        transform: translate(
                ${(props) =>
                    props.play ? '-50%, 0' : '-50%, -50%'}
            )
            scale(1) rotate(0deg);

        &:hover {
            transform: translate(
                    ${(props) =>
                        props.play
                            ? '-50%, 0'
                            : '-50%, -50%'}
                )
                scale(1.2) rotate(15deg);
        }
    }
`;

const PlayPause = ({ play, setPlay }) => (
    <StyledAside play={play}>
        <h2 onClick={() => setPlay((prev) => !prev)}>
            {play ? 'Pause' : 'Play!'}
        </h2>
    </StyledAside>
);

export default PlayPause;
