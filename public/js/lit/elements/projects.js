/* eslint-disable max-len */
import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
import {standardSpacing} from '../styles/standardSpacing.js';
import './project.js';

/**
 * This element displays my current relevant programming projects.
 */
export class Projects extends LitElement {
    static styles = [standardSpacing, css`
        .main-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    `];

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
     * Returns the rendered html for this element.
     * @return {html}
     */
    render() {
        return html`
        <div class="main-content standard-gap">
            ${this._projectsArray.render({
                pending: () => html`<p>Loading projects...</p>`,
                complete: (data) => data.projects.map((project) => html`<individual-project projectData=${JSON.stringify(project)}></individual-project>`),
                error: (e) => html`<p>Error: ${e}</p>`,
        })}
        </div>`;
    }
}
customElements.define('my-projects', Projects);
