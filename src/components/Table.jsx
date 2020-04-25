import React from 'react';
import styled from 'styled-components';

import ToiletItem from './ToiletItem';

const StyledMain = styled.main`
    background-image: url('../src/assets/table.png');
    width: 100vw;
    background-position: center 20%;
    margin-bottom: 5%;
    position: relative;

    &::after {
        content: '';
        padding-bottom: 30%;
        display: block;
    }
`;

const StyledRow = styled.div`
    display: inline-grid;
    grid-gap: 2rem 2rem;
    padding: 0 2rem;
    position: absolute;
    transform-origin: top center;
    grid-template-columns: repeat(4, 1fr);
    left: 50%;
    width: 100vw;

    ${(props) =>
        props.secondary
            ? `
            top: 15%;
            transform: translateX(-37.5%);
            `
            : `
            bottom: 20%;
            transform: translateX(-50%);
        `}
`;

const Table = ({ activeArtist = 'goya' }) => (
    <StyledMain>
        <StyledRow secondary>
            {'.'
                .repeat(3)
                .split('')
                .map(() => (
                    <ToiletItem
                        activeArtist={activeArtist}
                    ></ToiletItem>
                ))}
        </StyledRow>

        <StyledRow>
            {'.'
                .repeat(4)
                .split('')
                .map(() => (
                    <ToiletItem
                        activeArtist={activeArtist}
                    ></ToiletItem>
                ))}
        </StyledRow>
    </StyledMain>
);

export default Table;
