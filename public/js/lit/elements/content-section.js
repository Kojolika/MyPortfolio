import {LitElement, html, css} from 'lit';
import {contentHeader} from '../styles/contentHeader.js';
import {standardShadow} from '../styles/standardShadow.js';
import {standardSpacing} from '../styles/standardSpacing.js';
import {standardBorder} from '../styles/standardBorder.js';

/**
 * This is the standard content section for each different type of content on the home page of the portfolio.
 */
export class ContentSection extends LitElement {
    static styles = [standardBorder, standardSpacing, standardShadow, contentHeader, css`
        article {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background-color: whitesmoke;
            color: black;
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
     * Returns the rendered html for this element.
     * @return {html}
     */
    render() {
        return html`
            <article class="standard-shadow standard-double-padding standard-border standard-border-radius">
                <h2 class="header">${this.sectionHeader}</h2>
                <slot></slot>
            </article>
        `;
    }
}
customElements.define('content-section', ContentSection);
