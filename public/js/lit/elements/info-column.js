import {LitElement, html, css} from 'lit';
import {centerChildren} from '../styles/centerChildren.js';

/**
 *
 */
export class InfoColumn extends LitElement {
  static styles = [centerChildren, css`
    :host {
        display: block;
        font-family: cursive;
        background-color: lightgrey;
        min-height: 3000px;
    }
    .main-content {
      width: 70%;
      min-width: 600px;
      background-color: lightblue;
    }
    .main-margin {
      background-color: bisque;
    }
    `];
  /**
  * @return {html}
  */
  render() {
    return html`
    <div class='center main-margin'>
      <div class='center main-content'>
        <p>I am in the main content.</p>
      </div>
    </div>
    `;
  };
}
customElements.define('info-column', InfoColumn);
