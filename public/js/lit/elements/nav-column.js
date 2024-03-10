import {LitElement, html, css} from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
  static styles = css`
    :host{
		display: flex;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
    	background-color: #3B85C4;
    	justify-content: center;
    	align-items: center;
    	height: 100vh;
    	position: fixed;
    	max-width: 25%;
    	min-width: 250px;
    	right: 0;
    	top: 0;
    }
  `;

  /**
   * @return {html}
   */
  render() {
    return html`
    <nav>
        <p>I am nav</p>
    </nav>`;
  }
}
customElements.define('nav-column', NavColumn);
