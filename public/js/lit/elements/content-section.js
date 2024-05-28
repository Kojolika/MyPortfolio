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
            box-shadow: rgba(0 0 0 / 0.3) 5px 10px 10px 5px;
            background-color: rgba(0, 0, 0, 0.75);
            border-image: linear-gradient(to bottom, cyan, blue) 1;
            border-width: 20px;
            color: white;
            padding: 56px;
            flex-grow: 1;
            min-width: 300px;
            height: auto;
        }
        @media screen and (max-width: 832px){
			article {
                padding: 28px;
			}
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
