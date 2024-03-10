import { LitElement, html, css } from 'lit';
import { contentHeader } from '../styles/content-header.js';

/**
 *
 */
export class ContentSection extends LitElement {
    static styles = [contentHeader, css`
        :host{
            justify-content: start;
        }
        article {
            width: 1250px;
            min-height: 1250px;
            background-color: lightcyan;
            scroll-snap-type: y mandatory;
            scroll-snap-align: start;
        }
    `];

    static properties = {
        title: { type: String },
    };

    constructor(title) {
        super();
        this.title = title;
    }

    /**
     *
     * @return {html}
     */
    render() {
        return html`
            <article>
                <h2 class="header">${this.title}</h2>
                <slot></slot>
            </article>
        `;
    }
}
customElements.define('content-section', ContentSection);
