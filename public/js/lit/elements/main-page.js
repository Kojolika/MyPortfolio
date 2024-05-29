import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';
import './background-style.js';

/**
 * Test element
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
	 *
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
