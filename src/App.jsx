import React, { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Controls from './components/Controls';
import Background from './components/Background';
import Table from './components/Table';

const artists = [
    'beksinski',
    'goya',
    'gyoboem',
    'killian',
    'manet',
    'nathan',
];

const App = () => {
    const [lives, setLives] = useState(5);
    const [points, setPoints] = useState(0);
    const [activeArtist, setActiveArtist] = useState(0);
    const [level, setLevel] = useState(1);

    const artist = artists[activeArtist];

    useEffect(() => {
        if (level === 1) return;

        setActiveArtist((prev) =>
            prev === artists.length - 1 ? 0 : prev + 1
        );
    }, [level]);

    useEffect(() => {
        if (!lives) {
            setLives(5);
            setPoints(0);
            setActiveArtist(0);
            setLevel(1);
        }
    }, [lives]);

    return (
        <div>
            <Background
                artists={artists}
                activeArtist={artist}
            />
            <Controls lives={lives} points={points} />
            <Table
                artists={artists}
                activeArtist={artist}
                setLives={setLives}
                setPoints={setPoints}
                setLevel={setLevel}
                level={level}
            />
            <Footer />
        </div>
    );
};

export default App;
