import { LitElement, html, css } from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
	static styles = css`
    	:host{
			display: flex;
			font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
			height: 100vh;
    		background-color: #3B85C4;
    		justify-content: center;
    		align-items: center;
    		position: fixed;
    		right: 0;
    		top: 0;
    	}
		li {
			color: white;
			font-size: 36px;
			list-style-type: none;	
		}

		ul {
			padding-left: 0;
		}
		@media screen and (max-width: 1500px){
			:host{
				display: none;
			}
		}
		@media screen and (min-width: 1500px){
			:host{
				min-width: 8%;
				max-width: 12%;
			}
		}
		@media screen and (min-width: 1750px){
			:host{
				min-width: 8%;
				max-width: 12%;
			}
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
