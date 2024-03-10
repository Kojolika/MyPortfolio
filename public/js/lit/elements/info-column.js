import { LitElement, html, css } from 'lit';
import './content-section.js';
import './about-me-article.js';
import './work-experience.js';
import './projects.js';
import './contact-me.js';
import { centerChildren } from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
	static styles = [centerChildren, css`
    	.main-content {
			display: flex;
      		width: 70%;
      		min-width: 600px;
      		flex-direction: column;
			justify-items: center;
			align-items: center;
			gap: 100px;
    	}
    `];

	/**
	* @return {html}
	*/
	render() {
		return html`
    		<div class='center main-margin'>
      			<div class='main-content'>
					<content-section title="Hi I'm Andrew.">
						<about-me></about-me>
					</content-section>
					<content-section title="Work Experience" >
						<work-experience></work-experience>
					</content-section>
					<content-section title="Projects">
						<my-projects></my-projects>
					</content-section>
					<content-section title="Contact me!">
						<contact-me></contact-me>
					</content-section>
      			</div>
    		</div>
    	`;
	};
}
customElements.define('info-column', InfoColumn);
