import {LitElement, html, css} from 'lit';
import {contentHeader} from '../styles/content-header.js';
import {standardShadow} from '../styles/standardShadow.js';

/**
 *
 */
export class ContentSection extends LitElement {
    static styles = [standardShadow, contentHeader, css`
        article {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            background-color: whitesmoke;
            border-image: linear-gradient(to bottom, cyan, blue) 1;
            border-width: 20px;
            color: black;
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
            <article class="standard-shadow">
                <h2 class="header">${this.sectionHeader}</h2>
                <slot></slot>
            </article>
        `;
    }
}
customElements.define('content-section', ContentSection);
