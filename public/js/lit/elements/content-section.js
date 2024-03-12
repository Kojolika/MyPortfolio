import {LitElement, html, css} from 'lit';
import {contentHeader} from '../styles/content-header.js';

/**
 *
 */
export class ContentSection extends LitElement {
    static styles = [contentHeader, css`
        :host{
            justify-content: start;
        }
        article {
            min-width: 320px;
            min-height: 1250px;
            display: flex;
            justify-content: center;
            flex-direction: column;
        }
    `];

    static properties = {
        title: {type: String},
    };

    /**
     *
     * @param {*} title
     */
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
