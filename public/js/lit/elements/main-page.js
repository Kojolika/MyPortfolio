import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
  static styles = css`
    main {
        display: flex;
        flex-direction: row;
        background-color: lightblue;
        justify-content: center;
        width: 100%;
    }
    info-column{
      min-width: 1750px;
      justify-self: center;
    }
  `;

  /**
   *
   * @return {html} html for the main page
   */
  render() {
    return html`
    <main> 
      <info-column>Col1</info-column>
      <nav-column>Col2</nav-column>
    </main>`;
  }
};
customElements.define('main-page', MainPage);
