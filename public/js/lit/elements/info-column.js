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
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-items: center;
			justify-content: start;
			align-items: center;	

      		min-width: 320px;
			width: 100%;
			max-width: 1024px;

			gap: 120px;

			padding-top: 100px;
			padding-bottom: 100px;
			padding-left: 8px;
			padding-right: 8px;
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
