import { LitElement, html } from 'lit-element';

export class MyList extends LitElement {
    static get properties() {
        return {
            items: { type: Array },
            title: { type: String }
        };
    }
    constructor() {
        super()
        this.title = ''
        this.items = []
    }
    render() {
        return html`
            <h1>${this.title}</h1>
            <ul>
                ${this.items.map(item=> html`<li>${item.name}(${item.year})</li>`)}
            </ul>
        `;
    }
}
customElements.define('my-list', MyList);