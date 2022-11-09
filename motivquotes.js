

import {store} from './motivquotestate';

//need to input name of class using Quote for now
//need to create quote template
class Quote extends HTMLElement{
    constructor(){;
        super()
        const shadow = this.attach Shadow({mode: 'open' })
        const template = document
            .querySelector ('#quote-template')
            .textContent.cloneNode(true);
        shadow.append(template);

        this._qoute = this.shadowRoot.querySelector('.qoute');
    }

    static get observedAttributes() {
        return  ['quote']
    }

}