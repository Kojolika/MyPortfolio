import {LitElement, html, css} from 'lit';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = css`
        img{
            max-width: 100%;
        }
        p{
            font-size: 36px;
        }
    `;

    /**
     *
     * @return {html}
     */
    render() {
        return html`
            <p>
                I'm a passionate software developer with experience in 
                machine learning, web development, and game development.
            </p>
            <img src="../../media/me.jpg">
        `;
    }
}
customElements.define('about-me', AboutMe);
