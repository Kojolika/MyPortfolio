import {LitElement, html, css} from 'lit';
import './info-column.js';
import './background-style.js';

/**
 * This is the main page for the website, everything else is rendered inside these elements.
 */
export class MainPage extends LitElement {
	static styles = css`
		main {
			box-sizing: border-box;
			display: flex;
			justify-content: center;
		}
	`;

	/**
	 * Returns the rendered html for this element.
	 * @return {html} html for the main page
	 */
	render() {
		return html`
			<background-style></background-style>
			<main>
      			<info-column></info-column>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
