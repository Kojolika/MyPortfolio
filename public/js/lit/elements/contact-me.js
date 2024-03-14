import {LitElement, html} from 'lit';

/**
 *
 */
export class ContactMe extends LitElement {
    /**
     *
     * @return {html}
     */
    render() {
        return html`
        <form action="https://formsubmit.co/amm982@live.com" method='post'>
            <input type="text" name="name" required>
            <input type="email" name="email" required>
            <button type="submit">Send</button>
        </form>`;
    }
}
customElements.define('contact-me', ContactMe);
