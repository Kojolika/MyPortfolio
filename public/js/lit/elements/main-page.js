import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
	static styles = css`
		main{
			box-sizing: border-box;
			display: flex;
			justify-content: center;
		}
		nav-column{
				display: none;
		}
		@media screen and (min-width: 832px){
			nav-column{
				display: flex;
			}
		}
	`;

	/**
	 *
	 * @return {html} html for the main page
	 */
	render() {
		return html`
			<nav-column></nav-column>
    		<main>
      			<info-column></info-column>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
