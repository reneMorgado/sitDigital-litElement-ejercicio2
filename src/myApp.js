import { LitElement, html } from 'lit-element';
import './myList'

class MyApp extends LitElement {
    static get properties() {
        return {
            items: { type: Array }
        };
    }
    constructor() {
        super()
        this.items = [
            {
                id: 1,
                name: 'Life is beautiful',
                year: 1997
            },
            {
                id: 2,
                name: 'Avengers - End game.',
                year: 2019
            },
            {
                id: 3,
                name: 'Interstellar',
                year: 2014
            },
            {
                id: 4,
                name: 'Hush',
                year: 2016
            },
            {
                id: 5,
                name: 'The purge',
                year: 2013
            }
        ]
    }
    render(){
        return html`
           <my-list title="My favorite movies" .items=${this.items}></my-list> 
        `
    }
}
customElements.define('my-app', MyApp);