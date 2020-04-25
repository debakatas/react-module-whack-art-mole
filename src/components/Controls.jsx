import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image: url('../src/assets/paper.png');
    width: 100px;
    height: 100px;
`;

const StyledH3 = styled.div`
    text-transform: uppercase;
`;

const Controls = () => (
    <aside>
        <div>
            <h3>a</h3>
            <small>a</small>
        </div>
        <div>
            <h3>a</h3>
            <small>a</small>
        </div>
    </aside>
);

export default Controls;
