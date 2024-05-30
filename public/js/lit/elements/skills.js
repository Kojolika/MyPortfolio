import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
import {icon} from '../styles/icon.js';
import {standardShadow} from '../styles/standardShadow.js';
import {standardSpacing} from '../styles/standardSpacing.js';
import {standardBorder} from '../styles/standardBorder.js';

/**
 * This element displays icons of my relevant skills.
 */
export class Skills extends LitElement {
    static styles = [standardBorder, standardSpacing, standardShadow, icon, css`
        .icon-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            font-size: 24px;
        }
        .icon-list-container { 
            display: flex;
            flex-wrap: wrap;
            grid-template-columns: 1fr 1fr 1fr;
            justify-content: center;
            align-items: center;
        }
        #icon-name {
            margin-top: 10px;
        }
    `];

    static properties={
        icons: {type: Object},
    };

    __iconTask = new Task(this, {
        task: async ([icons], {signal}) =>{
            const response = await fetch('/icons', {signal});
        if (!response.ok) {
             throw new Error(response.status);
        }
          return response.json();
        },
      args: () => [this.icons],
    });
    /**
     *
     * @param {JSON} data
     * Associated data for each icon.
     * @return {Array<html>}
     * Returns the html for each icon.
     */
    iconList = (data) =>
        data.icons.map((iconData) => {
            return html`
                <div class="icon-container">
                    <a href=${iconData.url}>
                        <img class="icon-clickable standard-shadow-hover standard-border" src=${iconData.img_url}>
                    </a>
                    <span id="icon-name"> ${iconData.name} </span>             
                </div>
            `;
        });

    /**
     * Returns the rendered html for this element.
     * @return {html}
     */
    render() {
        return this.__iconTask.render({
            pending: () => html`<p>Loading images...</p>`,
            complete: (data) => {
                return html`
                    <div class="icon-list-container standard-gap">
                        ${this.iconList(data)}
                    </div>
                `;
           },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
};
customElements.define('my-skills', Skills);
