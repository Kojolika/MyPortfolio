import {LitElement, html, css} from 'lit';
import {standardShadow} from '../styles/standardShadow.js';
import {standardBorder} from '../styles/standardBorder.js';
/**
 * Defines the display for each individual project.
 */
export class Project extends LitElement {
    static styles = [standardBorder, standardShadow, css`
    h3 {
        font-size: 28px;
    }
    .project-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: white;
        padding-left: 28px;
        padding-right: 28px;
    }
    .thumbnail-container {
        min-height: 152px;
        min-width: 152px;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
    }
    ul {
        padding: 0;
        display: flex;
        list-style-type: none;
        gap: 4px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    li {
        font-size: 20px;
        background-color: lightblue;
        padding-left: 8px;
        padding-right: 8px;
        color: black;
    }
    a {
        margin-left: auto;
    }
    .github-icon {
        max-width: 64px;
    }
    .title-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
    }
    .project-display {
        width: 100%;
    }
    @media screen and (max-width: 832px){
        p {
            font-size: 16px;
        }
        h3 {
            font-size: 20px;
        }
    }
    `];

    static properties = {
        projectData: {type: Object},
        isPlayingVideo: {type: Boolean},
    };

    /**
     * Sets default variable.
     */
    constructor() {
        super();
        this.isPlayingVideo = false;
    }
    /**
     * Adds event listener for scorlling and prefetches video.
     */
    async connectedCallback() {
        super.connectedCallback();
        window.addEventListener('scroll', this._handleScroll);

        const videoUrl = this.projectData.media_url;
        const doesVideoExist = videoUrl != null && videoUrl.length > 0;
        if (doesVideoExist) {
            await fetch(this.projectData.media_url);
        }
      }
    /**
     * Removes event listener.
     */
    disconnectedCallback() {
        window.removeEventListener('scroll', this._handleScroll);
        super.disconnectedCallback();
      }

    /**
     * Determines if the project thumbnail is the focus of the viewport, if so the video will automatically play if it exists.
     */
    _handleScroll = () => {
        const elementDOMRect = this.getBoundingClientRect();
        const isInView = elementDOMRect.top > 0 && elementDOMRect.bottom > 0;
        const videoUrl = this.projectData.media_url;
        const doesVideoExist = videoUrl != null && videoUrl.length > 0;

        this.isPlayingVideo = isInView && doesVideoExist ? true : false;
    };

	/**
	 * Returns the rendered html for this element.
	 * @return {html} html for the main page
	 */
	render() {
        if (this.projectData == null) {
            return html``;
        }
        const techStack = this.projectData.tech.map((sentence) => html`<li class="standard-border-radius">${sentence}</li>`);
        return html`
            <div class="project-container standard-shadow-hover standard-border standard-border-radius">
                <div class="thumbnail-container">
                    <div class="title-container">
                        <h3>${this.projectData.title}</h3>
                        <a href="${this.projectData.url}">
                            <img class="github-icon standard-shadow-hover standard-border-radius" src="media/icons/github.png" >
                        </a>  
                    </div>
                    ${this.isPlayingVideo?
                        html`
                            <video class="project-display" controls autoplay muted loop>
                                <source src=${this.projectData.media_url} type="video/mp4">
                            </video>
                        `:
                        html`
                            <img class="project-display" src=${this.projectData.thumbnail_url}>
                        `
                    }
                    <ul>${techStack}</ul>
                </div>
                <p>${this.projectData.summary}</p>                        
            </div>
        `;
	}
};
customElements.define('individual-project', Project);
