import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
import {contentHeader} from '../styles/content-header.js';

/**
 *
 */
export class WorkExperience extends LitElement {
    static styles = [contentHeader,
        css`
            .job-desc{
                display: flex;
                flex-direction: column;
            }
        `,
    ];
    static properties = {
        workExpArray: {type: Object},
    };

    _workExpTask = new Task(this, {
        task: async ([workExpArray], {signal}) =>{
            const response = await fetch('/work-experience', {signal});
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        },
        args: () => [this.workExpArray],
    });

    /**
    *
    * @return {html}
    */
    render() {
        return this._workExpTask.render({
            pending: () => html`<p>Loading work exp...</p>`,
            complete: (workArray) => {
                return workArray.jobs.map((workExp) =>{
                    const description = workExp.description.map((sentence) => html`<span>${sentence}</span>`);
                    return html`
                        <div >
                            <h2>${workExp.employer}</h2>
                            <h3>${workExp.title}</h3>
                            <p class="job-desc">${description}</p>
                        </div>
                    `;
                });
            },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
}
customElements.define('work-experience', WorkExperience);
