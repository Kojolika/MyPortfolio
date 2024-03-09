import {LitElement, html} from 'lit';

/**
 * This class displays all the env variables associated with this build.
 */
export class EnvVarInfo extends LitElement {
  static properties = {
    envObject: {},
  };

  /**
 *
 * @return {html} for which lists env vars
 */
  render() {
    if (typeof(this.envObject) == 'string') {
      this.envObject = JSON.parse(this.envObject);
    }

    return html`
    <ul>
    ${Object
      .keys(this.envObject)
      .map((e) => {
        return html`<li> ${e} : ${this.envObject[e]} </li>`;
      })}
    </ul>`;
  }
}
customElements.define('env-var-info', EnvVarInfo);
