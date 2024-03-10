import { LitElement, html, css } from "lit";

export class AboutMe extends LitElement {
    static styles = css`
    img{
      max-width: 100%;
    }
    `;

    render() {
        return html`
            <p>I'm a passionate software developer with experience in machine learning, web development, and game development. 
                For more information of my work please use the sidebar on the right.</p>
            <img src="../../media/test.jpg">
        `;
    }
}
customElements.define('about-me', AboutMe);
