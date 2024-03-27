import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
/**
 *
 */
export class AboutMe extends LitElement {
    static styles = css`
        :host{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 100%;
            border-radius: 10px;
        }
        p{
            font-size: 24px;
            margin: 0 0 30px 0;
        }
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        .icon {
            max-width: 64px;
        }
        .icon-container{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 28px;
            margin-top: 28px;
            padding: 28px;
            background-color: rgba(255 255 255);
            border-radius: 10px;
            width: fit-content;
        }
        @media screen and (min-width: 832px){
            .icon {
                max-width: 128px;
            }
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

    topSection = html`
        <div>
            <p>
               I'm a passionate software developer with experience in 
               machine learning, web development, and game development.
            </p>
            <img src="../../media/me.jpg">
        </div>
    `;
    /**
     *
     * @param {JSON} data
     * @return {Array<html>}
     */
    iconList = (data) =>
        data.icons.map((iconData) => {
            return html`
                <img class="icon" src=${iconData.img_url}>
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
                    ${this.topSection}
                    <div class="icon-container">
                        ${this.iconList(data)}
                    </div>
                `;
           },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
}
customElements.define('about-me', AboutMe);
