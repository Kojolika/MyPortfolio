import {LitElement, html, css} from 'lit';
import {standardShadow} from '../styles/standardShadow.js';
import {icon} from '../styles/icon.js';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = [standardShadow, icon, css`
        .icon:hover
        {
            cursor: pointer;
        }
        :host{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 100%;
            border-radius: 10px;
        }
        p{
            font-size: 24px;
            margin: 0 0 30px 0;
        }
        div{
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
            gap: 28px;
        }
        @media screen and (min-width: 832px){
            .icon {
                max-width: 128px;
            }
		}
    `];


    topSection = html`
        <div>
            <p>
               I'm a passionate software developer with experience in 
               machine learning, web development, and game development.
               <br>
               My core skills are C#, Unity, JavaScript, Node.js and Python.
               <br>
               <br>
               Visit my LinkedIn and Github if you'd like to contact me or see my work!
            </p>
            <div class="icon-container">
                <a href="https://www.linkedin.com/in/andrew-myshok-55106822a/">
                    <img class="icon standard-shadow-hover" src="media/icons/linkedin.png">
                </a>
                <a href="https://github.com/Kojolika">
                    <img class="icon standard-shadow-hover" src="media/icons/github.png">
                </a>
            </div>
        </div>
    `;

    /**
     *
     * @return {html}
     */
    render() {
        return this.topSection;
    }
}
customElements.define('about-me', AboutMe);
