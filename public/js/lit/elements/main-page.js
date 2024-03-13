import { LitElement, html, css } from 'lit';
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
			width: 50%;
		}
		#right-margin {
			display: flex;
		}
		info-column {
			margin-left: 100px;
			margin-right: 100px;
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
		@media screen and (min-width: 768px) and (max-width: 1024px){
			div{
				width: 0;
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
