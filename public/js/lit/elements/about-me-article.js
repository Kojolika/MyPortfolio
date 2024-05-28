import {LitElement, html, css} from 'lit';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = css`
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
        @media screen and (min-width: 832px){
            .icon {
                max-width: 128px;
            }
		}
    `;


    topSection = html`
        <div>
            <p>
               I'm a passionate software developer with experience in 
               machine learning, web development, and game development.
               <br>
               <br>
               My core skills are C#, Unity, JavaScript and Node.js.
               Visit my LinkedIn and Github on the left if you'd like to contact me or see my work!
            </p>
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
