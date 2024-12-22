const player1 = document.querySelector('.player1');
const createPlayer = document.createElement('button');
createPlayer.classList.add('player1-button')

createPlayer.innerHTML = 'Create player'
player1.appendChild(createPlayer);

createPlayer.addEventListener('click', () => {
    const fleet = document.createElement('div');
    fleet.classList.add('player1-fleet')
    
    // Carrier
    const carrier = document.createElement('div');
    carrier.classList.add('player1-carrier')
    const carrierH1 = document.createElement('h1');
    carrierH1.innerHTML = 'Carrier'

    const carrierRowH2 = document.createElement('h2');
    carrierRowH2.innerHTML = 'Row: '
    const carrierRow = document.createElement('input');
    carrierRow.classList.add('player1-carrier-row')
    
    const carrierColumnH2 = document.createElement('h2');
    carrierColumnH2.innerHTML = 'Column: '
    const carrierColumn = document.createElement('input');
    carrierColumn.classList.add('player1-carrier-column');
    
    const carrierDirectionH2 = document.createElement('h2');
    carrierDirectionH2.innerHTML = 'Direction: ';
    const carrierDirection = document.createElement('input');
    carrierDirection.classList.add('player1-carrier-direction')

    player1.appendChild(fleet)
    fleet.appendChild(carrier);
    carrier.appendChild(carrierH1);
    carrierH1.appendChild(carrierRowH2);
    carrierRowH2.appendChild(carrierRow);
    carrierH1.appendChild(carrierColumnH2);
    carrierColumnH2.appendChild(carrierColumn);
    carrierH1.appendChild(carrierDirectionH2);
    carrierDirectionH2.appendChild(carrierDirection);
})



//TODO: Figure out how to render the array as a grid on the DOM

import { Gameboard } from "./gameboard.js";
import './styles.css';
