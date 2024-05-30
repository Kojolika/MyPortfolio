import {LitElement, html, css} from 'lit';
import './content-section.js';
import './about-me-article.js';
import './projects.js';
import './skills.js';
import {centerChildren} from '../styles/centerChildren.js';
import {standardSpacing} from '../styles/standardSpacing.js';

/**
 * This is the main column of content for the website.
 */
export class InfoColumn extends LitElement {
	static styles = [standardSpacing, centerChildren, css`
		.main-content {
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
      		min-width: 320px;
			max-width: 1280px;
			width: auto;
			padding-left: 8px;
			padding-right: 8px;
		}
		@media screen and (max-width: 832px){
			.main-content {
				width: 96%;
				padding-top: 20px;
				padding-bottom: 20px;
				padding-left: 4px;
				padding-right: 4px;
			}
		}
		@media screen and (max-width: 1468px) and (min-width: 832px){
			.main-content {
				width: 80%;
			}
		}
		@keyframes slidein {
  			0% {
    			transform: translateY(100%);
				opacity: 0;
  			}
			75% {
				opacity: 0;
			}
  			100% {
   				transform: translateY(0%);
				opacity: 1;
  			}
		}
		#about {
			animation: slidein 1s ease-in;
		}
		#skills {
			animation: slidein 1.25s ease-in;
		}
		#projects {
			animation: slidein 1.5s ease-in;
		}
    `];

	/**
	 * Returns the rendered html for this element.
	 * @return {html}
	 */
	render() {
		return html`
			<div class="main-content standard-gap standard-padding">
				<content-section id="about" sectionHeader="Hi, I'm Andrew.">
					<about-me></about-me>
				</content-section>
				<content-section id="skills" sectionHeader="Skills">
					<my-skills></my-skills>
				</content-section>
				<content-section id="projects" sectionHeader="Projects">
					<my-projects></my-projects>
				</content-section>
			</div>
    	`;
	};
}
customElements.define('info-column', InfoColumn);
