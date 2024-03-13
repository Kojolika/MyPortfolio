import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';

/**
 *
 */
export class Projects extends LitElement {
    static styles = css`
        :host{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            gap: 20px;
            width: 100%;
            height: 100%;
        }
        div{
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
            border-style: solid;
            border-radius: 10px;
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
                    return html`
                        <div>
                            <h3>${project.title}</h3>
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
