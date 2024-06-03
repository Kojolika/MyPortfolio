import {LitElement, html, css} from 'lit';
import {standardBorder} from '../styles/standardBorder.js';
import {icon} from '../styles/icon.js';

/**
 * This class displays all the env variables associated with this build.
 */
export class EnvVarInfo extends LitElement {
  /**
   * Sets initial open value.
   */
  constructor() {
    super();

    this.isOpen = true;
  }

  static properties = {
    envObject: {},
    isOpen: {type: Boolean},
  };

  static styles = [icon, standardBorder, css`
    div {
      position: fixed;
      top: 0;
      right: 0%;
      background-color: white;
      display: flex;
      flex-direction: row;
    }
    ul {
      margin: 0;
    }
    button {
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 6px;
      padding-bottom: 6px;
      padding-left: 12px;
      padding-right: 12px;
      min-width: 32px;
      min-height: 32px;
    }
  `];

  _handleClick = () => {
    this.isOpen = !this.isOpen;
  };

  /**
 * Returns the rendered html for this element.
 * @return {html} for which lists env vars
 */
  render() {
    if (typeof(this.envObject) == 'string') {
      this.envObject = JSON.parse(this.envObject);
    }

    return html`
      <div>
        <button @click="${this._handleClick}" class="icon-clickable standard-border standard-border-radius">
          ${this.isOpen?html`>`:html`<`}
        </button>
        ${this.isOpen?
          html`<ul>
            ${Object
              .keys(this.envObject)
              .map((e) => {
                return html`<li> ${e} : ${this.envObject[e]} </li>`;
            })}
          </ul>`:
          html``}
      </div>`;
  }
}
customElements.define('env-var-info', EnvVarInfo);
