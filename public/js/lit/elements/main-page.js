import {LitElement, html, css} from 'lit';
import './info-column.js';
import './nav-column.js';

/**
 * Test element
 */
export class MainPage extends LitElement {
  static styles = css`
    main {
        display: grid;
        grid-template-columns: 4fr 1fr;
        grid-auto-rows: minmax(100px, auto);
        background-color: lightblue;   
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
