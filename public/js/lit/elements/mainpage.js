import {LitElement, html} from 'lit';

/**
 * Test element
 */
export class MainPage extends LitElement {
  /**
   *
   * @return {html} html for the main page
   */
  render() {
    return html`<main> I am in the main element. </main>`;
  }
};
customElements.define('main-page', MainPage);
