import React from 'react';

import PlanetSystem from './PlanetSystem';
import {planets, moons} from '../util/globals';

function StarSystem () {

    return (
        <div className="star-system">
            {
                planets.map(planet => (
                    <PlanetSystem key={planet.id} planet={planet} moons={moons.filter(moon => moon.planetId === planet.id)} />
                ))
            }
        </div>
    );
}

export default StarSystem;