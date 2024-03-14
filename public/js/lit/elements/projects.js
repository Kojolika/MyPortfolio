import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';

/**
 *
 */
export class Projects extends LitElement {
    static styles = css`
        :host{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            width: 100%;
            height: 100%;
            margin-top: 20px;
        }
        div{
            min-height: 150px;
            min-width: 150px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            text-align: center;
            background-color: lightgray;
            padding-left: 10px;
            padding-right: 10px;
        }
        div:hover{
            box-shadow: black 0px 0px 15px;
        }   
        ul{
            padding: 0;
            display: flex;
            list-style-type: none;
            gap: 5px;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }
        li{
            background-color: lightblue;
            border-radius: 5px;
            padding-left: 1px;
            padding-right: 1px;
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
                          <!--   <img srcset='media/test.gif 150w, media/test.gif 200w' sizes='(max-height: 768px) 150px, (min-height: 769px) 200px'> -->
                            <img src='media/test.gif' width='150px' height='150px'>
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
