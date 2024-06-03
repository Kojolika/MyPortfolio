import {LitElement, html, css} from 'lit';
import {standardShadow} from '../styles/standardShadow.js';
import {icon} from '../styles/icon.js';
import {standardSpacing} from '../styles/standardSpacing.js';
import {standardBorder} from '../styles/standardBorder.js';

/**
 * This element is the about me section at the top of the portfolio with links to my relevant social media.
 */
export class AboutMe extends LitElement {
    static styles = [standardBorder, standardSpacing, standardShadow, icon, css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img {
            width: 100%;
            border-radius: 10px;
        }
        p {
            font-size: 24px;
            margin: 0 0 30px 0;
        }
        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .icon-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        @media screen and (min-width: 832px) {
            .icon {
                max-width: 128px;
            }
		}
        @media screen and (max-width: 832px) {
            p {
                font-size: 16px;
            }
		}
    `];


    topSection = html`
        <div>
            <p>
               I'm a passionate software developer who loves creating things and solving problems.
               <br>
               I have professional experience with client, server, and web applications as well as databases and machine learning.
               <br>
               Let's get in touch if you're looking for someone with these skills.
               <br>
               <br>
               Visit my LinkedIn and Github if you'd like to connect or see my work!
            </p>
            <div class="icon-container standard-gap">
                <a href="https://www.linkedin.com/in/andrew-myshok-55106822a/">
                    <img class="icon-clickable standard-shadow-hover standard-border" src="media/icons/linkedin.png">
                </a>
                <a href="https://github.com/Kojolika">
                    <img class="icon-clickable standard-shadow-hover standard-border" src="media/icons/github.png">
                </a>
            </div>
        </div>
    `;

    /**
     * Returns the rendered html for this element.
     * @return {html}
     */
    render() {
        return this.topSection;
    }
}
customElements.define('about-me', AboutMe);
