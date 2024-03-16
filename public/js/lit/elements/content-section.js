import {LitElement, html, css} from 'lit';
import {contentHeader} from '../styles/content-header.js';

/**
 *
 */
export class ContentSection extends LitElement {
    static styles = [contentHeader, css`
        article {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            box-shadow: rgba(0 0 0 / 0.6) 0px 0px 90px 10px;
            // background-color: rgba(0, 0, 0, 0.75);
            //background-color: #ffffffa3;
            background: linear-gradient(#9198e500,#eda1ab84 75%,#ca90bdca 90%, #AB93C9 99%);
            border-image: linear-gradient(to bottom, cyan, blue) 1;
            border-width: 20px;
            // color: white;
            padding: 28px;
            
            flex-grow: 1;
            min-width: 300px;
            height: auto;
        }
    `];

    static properties = {
        sectionHeader: {type: String},
    };

    /**
     *
     * @param {String} sectionHeader
     */
    constructor(sectionHeader) {
        super();
        this.sectionHeader = sectionHeader;
    }

    /**
     *
     * @return {html}
     */
    render() {
        return html`
            <article>
                <h2 class="header">${this.sectionHeader}</h2>
                <slot></slot>
            </article>
        `;
    }
}
customElements.define('content-section', ContentSection);
