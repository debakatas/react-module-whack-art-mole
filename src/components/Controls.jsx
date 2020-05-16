import React from 'react';
import styled from 'styled-components';

const StyledAside = styled.aside`
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 100;
`;

const StyledDiv = styled.div`
    background-image: url('../src/assets/paper.png');
    width: 100px;
    height: 100px;
    color: var(--color-gray);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-position: -32px -8px;
`;

const StyledH3 = styled.div`
    text-transform: uppercase;
`;

const StyledSmall = styled.small`
    font-size: 2rem;

    span:nth-of-type(2) {
        display: inline-block;
        transform: translateY(-10%) rotate(5deg);
    }
`;

const Controls = ({ lives, points }) => (
    <StyledAside>
        <StyledDiv>
            <StyledH3>Lives</StyledH3>
            <StyledSmall>{lives}</StyledSmall>
        </StyledDiv>

        <StyledDiv>
            <StyledH3>Points</StyledH3>
            <StyledSmall>
                {String(points)
                    .padStart(3, '0')
                    .split('')
                    .map((number) => (
                        <span>{number}</span>
                    ))}
            </StyledSmall>
        </StyledDiv>

        <a
            href="http://debakatas.com"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src="../src/assets/head.png"
                alt="Nicolas M. Pardo"
            />
        </a>
    </StyledAside>
);

export default Controls;
