import {LitElement, html, css} from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
	static styles = css`
    	:host{
			display: flex;
			height: 100vh;
    		background-color: #3B85C4;
    		align-items: center;
			position: sticky;
			top: 0;
			padding-left: 25px;
			padding-right: 25px;
			box-shadow: black 0px 0px 15px; 
    	}
		li {
			color: white;
			font-size: 36px;
			list-style-type: none;
		}
		ul {
			display: flex;
			padding-left: 0;
			flex-direction: column;
			justify-content: space-evenly;
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
					<li>Projects</li>
					<li>Contact</li>
				</ul>
    		</nav>
		`;
	}
}
customElements.define('nav-column', NavColumn);
