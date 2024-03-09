import { LitElement, html, css } from "lit";

export class AboutMe extends LitElement {
    static styles = css`
    article{
        display: block;
        background-color: orange;
        min-height: 1000px;
    }
    img{
      max-width: 100%;
    }
    `;

    render() {
        return html`
            <article>
                <h1>Hi I'm Andrew</h1>
                <p>I'm a passionate software developer with experience in machine learning, web development, and game development. 
                   For more information of my work please use the sidebar on the right.</p>
                <img src="../../media/test.jpg">
            </article>
            `;
    }
}
customElements.define('about-me', AboutMe);
