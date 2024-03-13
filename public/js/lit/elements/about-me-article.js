import {LitElement, html, css} from 'lit';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = css`
        img{
            width: 100%;
            max-width: 800px;
        }
        p{
            min-width: 300px;
            font-size: 36px;
            margin: 0;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
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
