import {LitElement, html, css} from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
	static styles = css`
    	:host{
			display: flex;
    		align-items: center;
			position: fixed;
			top: 0;

			height: 100vh;

			padding-left: 24px;
			padding-right: 24px;

			box-shadow: black 0px 0px 16px;
			background-color: rgba(0, 0, 0, 0.75);
    	}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;

			opacity: 1;

			font-size: 36px;

			color: black;
			font-style: normal;
			text-decoration: none;

			background-color: white;

			padding: 4px;
			border-radius: 8px;

			height: 32px;
			width: 32px;
		}
		a:hover{
			background-color: #e3a4ad;
			box-shadow: white 0px 0px 8px;
			cursor: pointer;
		}
		div {
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
				<div>
					<a href="#about">A</a>
					<a href="#projects">P</a>
					<a href="#contact">C</a>
				</div>
    		</nav>
		`;
	}
}
customElements.define('nav-column', NavColumn);
