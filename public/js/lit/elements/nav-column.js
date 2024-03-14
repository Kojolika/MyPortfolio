import { LitElement, html, css } from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
	static styles = css`
    	:host{
			display: flex;
			height: 100vh;
    		background-color: rgba(20, 200, 255, 0.5);
    		align-items: center;
			position: sticky;
			top: 0;
			padding-left: 25px;
			padding-right: 25px;
			box-shadow: black 0px 0px 15px;
    	}
		li {
			//color: white;
			opacity: 1;
			font-size: 36px;
			list-style-type: none;
			background-color: white;
			padding: 5px;
		}
		li:hover{
			box-shadow: 15px -15px lightgrey;
			cursor: cell;
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
					<li>About Me</li>
					<li>My Work</li>
					<li>Contact</li>
				</ul>
    		</nav>
		`;
	}
}
customElements.define('nav-column', NavColumn);
