import {LitElement, html} from 'lit';

/**
 *
 */
export class SlideShow extends LitElement {
    static properties = {
        contents: {type: Object},
    };

    /**
     *
     * @return {html}
     */
    render() {
        return html``;
    }
}
customElements.define('slide-show', SlideShow);
