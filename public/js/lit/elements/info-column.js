import {LitElement, html, css} from 'lit';
import './content-section.js';
import './about-me-article.js';
import './work-experience.js';
import './projects.js';
import './contact-me.js';
import {centerChildren} from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
	static styles = [centerChildren, css`
    	.main-content {
			height: 100vh;
			display: flex;
      		min-width: 320px;
      		flex-direction: column;
			justify-items: center;
			align-items: center;
			gap: 100px;
			padding-left: 10px;
			padding-right: 10px;
			overflow-y: scroll;
  			scroll-snap-type: y proximity;
    	}
		content-section{
			scroll-snap-align: start;
		}
    `];

	/**
	* @return {html}
	*/
	render() {
		return html`
    		<div class='center'>
      			<div class='main-content'>
					<content-section sectionHeader="Hi, I'm Andrew.">
						<about-me></about-me>
					</content-section>
<!-- 					<content-section sectionHeader="Work Experience" >
						<work-experience></work-experience>
					</content-section> -->
					<content-section sectionHeader="Projects">
						<my-projects></my-projects>
					</content-section>
					<content-section sectionHeader="Contact me!">
						<contact-me></contact-me>
					</content-section>
      			</div>
    		</div>
    	`;
	};
}
customElements.define('info-column', InfoColumn);
