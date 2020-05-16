import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import ToiletItem from './ToiletItem';
import randomInRange from '../utils/random';
import PlayPause from './PlayPause';

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
    z-index: var(--z-table);

    ${(props) =>
        props.secondary
            ? `
            top: 15%;
            transform: translateX(-37.5%);
            `
            : `
            bottom: 20%;
            transform: translateX(-50%);
        `};
`;

const MAX_ROUND = 10;
const BASE_STATE = {};

for (let index = 0; index < 7; index += 1) {
    BASE_STATE[index] = {
        up: false,
        fake: false,
    };
}

const Table = ({
    activeArtist,
    artists,
    setLives,
    setPoints,
    setLevel,
    level,
}) => {
    const [moles, setMoles] = useState({});
    const [inGame, setInGame] = useState(false);
    const [play, setPlay] = useState(false);
    const [newRoundTimeOut, setNewRoundTimeOut] = useState(
        null
    );
    const odds = useRef(10);

    const newRound = async (currentRound) => {
        const quantityActive = randomInRange(1, 3);

        const activeElements = [];

        while (activeElements.length < quantityActive) {
            const newElement = randomInRange(0, 6);
            if (!activeElements.includes(newElement)) {
                activeElements.push(newElement);
            }
        }

        const newElements = activeElements.reduce(
            (obj, actElem) => {
                obj[actElem] = {};

                const fakeOdd = 1 - odds.current / 100;

                if (Math.random() > fakeOdd) {
                    obj[actElem].fake = true;
                } else {
                    obj[actElem].up = true;
                }

                return obj;
            },
            {}
        );

        setMoles({
            ...BASE_STATE,
            ...newElements,
        });

        if (currentRound > MAX_ROUND) {
            setInGame(false);
            setLevel((prev) => prev + 1);
        } else {
            await setNewRoundTimeOut((prev) => {
                clearTimeout(prev);

                return setTimeout(() => {
                    newRound(currentRound + 1);
                }, 1000);
            });
        }
    };

    useEffect(() => {
        const newMoles = {};
        for (let index = 0; index < 7; index += 1) {
            newMoles[index] = {
                up: false,
                fake: false,
            };
        }

        setMoles(newMoles);
    }, []);

    useEffect(() => {
        if (inGame) {
            newRound(0);
        } else {
            setMoles(BASE_STATE);
        }
    }, [inGame]);

    useEffect(() => {
        odds.current = Math.min(10 + (level - 1) * 10, 95);
        if (level === 1) {
            setPlay(false);
            setMoles(BASE_STATE);
        } else {
            newRound(0);
        }
    }, [level]);

    useEffect(() => {
        document.documentElement.style.setProperty(
            '--z-table',
            play ? 1000 : 1
        );

        if (play) {
            newRound(0);
        } else {
            clearTimeout(newRoundTimeOut);
        }
    }, [play]);

    const molesArray = Object.entries(moles);

    const ToiletWrapper = (props) => (
        <ToiletItem
            activeArtist={activeArtist}
            artists={artists}
            setLives={setLives}
            setPoints={setPoints}
            setMoles={setMoles}
            {...props}
        />
    );

    return (
        <StyledMain>
            <PlayPause setPlay={setPlay} play={play} />

            <StyledRow secondary>
                {molesArray
                    .slice(0, 3)
                    .map(([id, mole]) => (
                        <ToiletWrapper
                            key={id}
                            id={id}
                            {...mole}
                        />
                    ))}
            </StyledRow>

            <StyledRow>
                {molesArray
                    .slice(3, 7)
                    .map(([id, mole]) => (
                        <ToiletWrapper
                            key={id}
                            id={id}
                            {...mole}
                        />
                    ))}
            </StyledRow>
        </StyledMain>
    );
};

export default Table;
