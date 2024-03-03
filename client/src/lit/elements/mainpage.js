import {LitElement, html} from 'lit';

export class MainPage extends LitElement {
    render(){
        return html`<main> I am in the main element. </main>`;
    }
};
customElements.define("main-page", MainPage);