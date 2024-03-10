import {LitElement, html, css} from 'lit';
import './about-me-article.js';
import './work-experience.js';
import {centerChildren} from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
	static styles = [centerChildren, css`
		:host {
			display: block;
    		font-family: cursive;
    		//background-color: lightgrey;
    		min-height: 3000px;
    	}
    	.main-content {
      		height: 100%;
      		width: 70%;
      		min-width: 600px;
      		background-color: #2BA2D4;
      		flex-direction: column;
      		align-items: start;
      		justify-content: center;
    	}
    	.main-margin {
    		background-color: bisque;
    	}
    `];

	/**
	* @return {html}
	*/
	render() {
		return html`
    		<div class='center main-margin'>
      			<div class='main-content'>
        			<about-me></about-me>
        			<work-experience></work-experience>
      			</div>
    		</div>
    	`;
  };
}
customElements.define('info-column', InfoColumn);
