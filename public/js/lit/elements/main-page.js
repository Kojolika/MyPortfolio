import { LitElement, html, css } from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
	static styles = css`
		main{
			display: grid;
			grid-template-columns: 10fr 1fr;
			justify-content: center;
		}
		#right-margin {
			display: flex;
			justify-content: center;
		}
		@media screen and (max-width: 768px){
			#right-margin{
				display: none;
			}
			#left-margin{
				display: none;
			}
			info-column {
				margin-left: 10px;
				margin-right: 10px;
			}
		}
	`;

	/**
	 *
	 * @return {html} html for the main page
	 */
	render() {
		return html`
    		<main>
		<!-- 		<div id="left-margin"></div> -->
      			<info-column></info-column>
				<div id="right-margin">
					<nav-column></nav-column>
				</div>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
