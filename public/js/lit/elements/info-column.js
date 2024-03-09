import { LitElement, html, css } from 'lit';
import { AboutMe } from './about-me-article.js';
import { centerChildren } from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
  static styles = [centerChildren, css`
    :host {
      display: block;
      font-family: cursive;
      //background-color: lightgrey;
      min-height: 3000px;
    }
    .main-content {
      height: 100%;
      width: 70%;
      min-width: 600px;
      background-color: lightblue;
      flex-direction: column;
      align-items: start;
      justify-content: center;
    }
    .main-margin {
      //background-color: bisque;
    }
    `];
  /**
  * @return {html}
  */
  render() {
    return html`
    <div class='center main-margin'>
      <div class='main-content'>
        <about-me></about-me>
      </div>
    </div>
    `;
  };
}
customElements.define('info-column', InfoColumn);
