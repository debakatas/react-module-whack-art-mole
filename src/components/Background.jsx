import React from 'react';
import styled from 'styled-components';

const StyledUl = styled.ul`
    height: 100vh;
    width: 100vw;
    position: fixed;
    z-index: -1;
    background: yellow;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: nowrap;
    transform: translateX(
        -${(props) => props.visible * 100}vw
    );
    transition: all 0.5s ease-in-out;
`;

const StyledLi = styled.li`
    list-style: none;
    background-image: url('../src/assets/${(props) =>
        props.artist}/bg.png');
    height: 100%;
    width: 100%;
    flex-basis: 100vw;
    flex-shrink: 0;
    background-size: cover;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`;

const StyledH2 = styled.h2`
    font-family: var(--font-funny);
    font-size: ${(props) => 80 / props.length}vmin;
    writing-mode: vertical-lr;
    position: absolute;
    left: 30%;
    top: 5%;
    color: white;
`;

const Background = ({ artists, activeArtist }) => (
    <StyledUl visible={artists.indexOf(activeArtist)}>
        {artists.map((artist) => (
            <StyledLi artist={artist}>
                <img
                    src={`../src/assets/${artist}/main.png`}
                    alt=""
                />
                <StyledH2 length={artist.length}>
                    {artist}
                </StyledH2>
            </StyledLi>
        ))}
    </StyledUl>
);

export default Background;
