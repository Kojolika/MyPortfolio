import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
/**
 *
 */
export class Skills extends LitElement {
    static styles = css`
    .icon {
        max-width: 96px;
        width: 100%;
        border-radius: 10px;
    }
    .icon-container:hover {
        box-shadow: white 0px 0px 15px;
    }
    .icon-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-size: 20px;
    }
    .icon-list-container { 
        display: flex;
        flex-wrap: wrap;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        gap: 28px;
    }
`;
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
     * @return {Array<html>}
     */
    iconList = (data) =>
        data.icons.map((iconData) => {
            return html`
                <div class="icon-container">
                    <span> ${iconData.name} </span>
                    <img class="icon" src=${iconData.img_url}>             
                </div>
            `;
        });

    /**
     *
     * @return {html}
     */
    render() {
        return this.__iconTask.render({
            pending: () => html`<p>Loading images...</p>`,
            complete: (data) => {
                return html`
                    <div class="icon-list-container">
                        ${this.iconList(data)}
                    </div>
                `;
           },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
};
customElements.define('my-skills', Skills);
