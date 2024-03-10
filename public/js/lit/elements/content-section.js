import {LitElement, html, csc} from 'lit';
import {contentHeader} from '../styles/content-header.js';

/**
 *
 */
export class ContentSection extends LitElement {
    static styles = [contentHeader];

    static properties = {
        title: {},
    };

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
