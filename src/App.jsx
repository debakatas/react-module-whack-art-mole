import React from 'react';

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

const App = () => (
    <div>
        <Background artists={artists}></Background>
        <Controls></Controls>
        <Table></Table>
        <Footer></Footer>
    </div>
);

export default App;
