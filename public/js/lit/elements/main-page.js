import { LitElement, html, css } from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
	/**
	 *
	 * @return {html} html for the main page
	 */
	render() {
		return html`
    		<main> 
      			<info-column></info-column>
      			<nav-column></nav-column>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
