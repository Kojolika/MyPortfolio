import {LitElement, html, css} from 'lit';

/**
 *
 */
export class NavColumn extends LitElement {
  static styles = css`
    :host{
      display: block;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
      background-color: lightsalmon;
    }
  `;

  /**
   * @return {html}
   */
  render() {
    return html`
    <nav>
        <p>I am nav</p>
    </nav>`;
  }
}
customElements.define('nav-column', NavColumn);
