import React, {useState} from 'react';
import classNames from 'classnames';

import Planet from './Planet';

function PlanetSystem ({planet, moons}) {

    const [selectedMoons, setSelectedMoons] = useState([]);

    const handleMoonCLick = (id) => {
        if (selectedMoons.includes(id)) {
            setSelectedMoons([
                ...selectedMoons.filter(item => item !== id)
            ]);
        } else {
            setSelectedMoons([
                ...selectedMoons,
                id
            ])
        }
    }

    return (
        <div className="planet-system">
            <Planet title={planet.title} circles={selectedMoons} />
            <div className="moons">
                {
                    moons.map(moon => (
                        <div key={moon.id} className={classNames('moon', {selected: selectedMoons.includes(moon.id)})} onClick={() => handleMoonCLick(moon.id)}>
                            {moon.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PlanetSystem;