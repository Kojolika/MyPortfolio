import {LitElement, html, css} from 'lit';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = css`
        img{
            width: 100%;
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
    `;

    /**
     *
     * @return {html}
     */
    render() {
        return html`
            <div>
                <p>
                    I'm a passionate software developer with experience in 
                    machine learning, web development, and game development.
                </p>
                <img src="../../media/me.jpg">
            </div>
        `;
    }
}
customElements.define('about-me', AboutMe);
