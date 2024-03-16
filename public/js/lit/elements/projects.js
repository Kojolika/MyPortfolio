import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';

/**
 *
 */
export class Projects extends LitElement {
    static styles = css`
        :host {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-content: center;
            gap: 28px;
        }
/*         @media screen and (max-width: 1472px){
            :host{
                grid-template-columns: 400px 400px;
            }
        }
        @media screen and (max-width: 1182px){
            :host{
                grid-template-columns: 252px 252px;
            }
        }
        @media screen and (max-width: 768px){
            :host{
                grid-template-columns: 200px 200px;
            }
		} */
        div {
            min-height: 152px;
            min-width: 152px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.75);
            border-radius: 8px;
        }
        h3 {
            font-size: 28px;
            color: white;
        }
        div:hover {
            box-shadow: white 0px 0px 15px;
        }   
        ul {
            padding: 0;
            display: flex;
            list-style-type: none;
            gap: 4px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        li {
            font-size: 20px;
            background-color: lightblue;
            border-radius: 8px;
            padding-left: 8px;
            padding-right: 8px;
        }
    `;
    static properties = {
        projectsArray: {type: Object},
    };

    _projectsArray = new Task(this, {
        task: async ([projectsArray], {signal}) =>{
            const response = await fetch('/projects', {signal});
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        },
        args: () => [this.projectsArray],
    });

    /**
     *
     * @return {html}
     */
    render() {
        return this._projectsArray.render({
            pending: () => html`<p>Loading projects...</p>`,
            complete: (data) => {
                return data.projects.map((project) =>{
                    const techStack = project.tech.map((sentence) => html`<li>${sentence}</li>`);
                    console.log(project.thumbnail_url);
                    return html`
                        <div>
                            <h3>${project.title}</h3>
                            <img src=${project.thumbnail_url} width="100%">
                            <ul>${techStack}</ul>
                        </div>
                    `;
                });
            },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
}
customElements.define('my-projects', Projects);
