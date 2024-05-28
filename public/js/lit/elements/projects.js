import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';

/**
 *
 */
export class Projects extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 28px;
        }
        h3 {
            font-size: 28px;
            color: black;
        }
        .project-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-color: white;
            border-radius: 8px;
            gap: 28px;
            padding-left: 28px;
            padding-right: 28px;
        }
        .project-container:hover {
            border: 5px outset wheat;
            box-sizing: border-box;
        }
        .thumbnail-container {
            min-height: 152px;
            min-width: 152px;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            text-align: center;
        }
        p {
            display: flex;
            color: black;
            justify-content: center;
            align-items: center;
            font-size: 20px;
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
            color: black;
        }
        a {
            margin-left: auto;
        }
        .github-icon {
            max-width: 64px;
        }
        .title-container {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
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
                        <div class="project-container">
                            <div class="thumbnail-container">
                                <div class="title-container">
                                    <h3>${project.title}</h3>
                                    <a href="${project.url}">
                                        <img src="media/icons/github.png" class="github-icon">
                                    </a>  
                                </div>
                                <img src=${project.thumbnail_url} width="100%">
                                <ul>${techStack}</ul>
                            </div>
                            <p>${project.summary}</p>                        
                        </div>
                    `;
                });
            },
            error: (e) => html`<p>Error: ${e}</p>`,
        });
    }
}
customElements.define('my-projects', Projects);
