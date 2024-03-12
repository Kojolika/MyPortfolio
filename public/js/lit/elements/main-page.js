import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
	static styles = css`
		main{
			display: flex;
			flex-direction: row;
			justify-content: center;
		}
		div{
			width: 100%;
		}
		#right-margin{
			display: flex;
			padding-left: 150px;
		}
		@media screen and (max-width: 1500px){
			#right-margin{
				display: none;
				padding-left: 0;
			}
			#left-margin{
				display: none;
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
				<div id="left-margin"></div>
      			<info-column></info-column>
				<div id="right-margin">
					<nav-column></nav-column>
				</div>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
