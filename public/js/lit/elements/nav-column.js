import {LitElement, html, css} from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
	static styles = css`
    	:host{
			display: flex;
    		align-items: flex-start;
			position: fixed;
			top: 0;

			height: 100vh;

			padding-left: 24px;
			padding-right: 24px;

			box-shadow: black 0px 0px 16px;
			background-color: rgba(0, 0, 0, 0.75);
    	}
		li {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			opacity: 1;

			font-size: 36px;

			list-style-type: none;
			
			background-color: white;

			padding: 4px;
			border-radius: 8px;

			height: 32px;
			width: 32px;
		}
		li:hover{
			background-color: #e76868;
			cursor: pointer;
		}
		ul {
			font-weight: bold;
			display: flex;
			padding-left: 0;
			flex-direction: column;
			justify-content: space-evenly;
			white-space: nowrap;
			gap: 20px;
		}
  	`;

	/**
	 * @return {html}
	 */
	render() {
		return html`
    		<nav>
				<ul>
					<li>A</li>
					<li>W</li>
					<li>C</li>
				</ul>
    		</nav>
		`;
	}
}
customElements.define('nav-column', NavColumn);
