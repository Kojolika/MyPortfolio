import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';

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
		#background {
			background-color: #67B9E8;
			width: 100%;
			height: 100%;

			box-sizing: border-box;
			position: fixed;
			display: flex;
			justify-content: center;
			z-index: -1;
		}
		#background2 {
			background-color: #93CEEF;
			width: 100%;
			height: 100%;
			clip-path: circle(91% at 85% 24%);
		}
		#background3 {
			background-color: #B1D8F7;
			width: 100%;
			height: 100%;
			clip-path: circle(62% at 85% 24%);
		}
		#bg4-wrapper {
			width: 100%;
			height: 100%;
			filter: drop-shadow(0 0 75px rgba(255,250,205, 0.5));
		}
		#background4 {
			background-color: whitesmoke;
			width: 100%;
			height: 100%;
			clip-path: circle(10% at 85% 24%);
		}
	`;

	/**
	 *
	 * @return {html} html for the main page
	 */
	render() {
		return html`
			<div id="background">
				<div id="background2">
					<div id="background3">
						<div id="bg4-wrapper">
							<div id="background4"></div>
						</div>
					</div>
				</div>
			</div>
			<main>
      			<info-column></info-column>
    		</main>
		`;
	}
};
customElements.define('main-page', MainPage);
