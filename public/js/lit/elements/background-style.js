import {LitElement, html, css} from 'lit';

/**
 *
 */
export class BackgroundStyle extends LitElement {
    static styles = css`
		@keyframes appear {
			0% { opacity: 0}
			100% {opacity: 1}
		}
		#background {
			background-color: #2465DB;
			width: 100%;
			height: 100%;

			box-sizing: border-box;
			position: fixed;
			display: flex;
			justify-content: center;
			z-index: -1;
			animation: appear 1s ease-in;
		}
		#bg2-wrapper {
			width: 100%;
			height: 100%;
			filter: drop-shadow(-1px 0 10px rgba(0,0,0, 0.25));
		}
		@keyframes slidein2 {
			0% { clip-path: circle(0% at 60% 25%); }
  			100% { clip-path: circle(85% at 60% 25%); }
		}
		#background2 {
			background-color: #4F84E3;
			width: 100%;
			height: 100%;
			clip-path: circle(85% at 60% 25%);
			animation: slidein2 .9s ease-in;
		}
		#bg3-wrapper {
			width: 100%;
			height: 100%;
			filter: drop-shadow(-1px 0 10px rgba(0,0,0, 0.25));
		}
		@keyframes slidein3 {
			0% { clip-path: circle(0% at 60% 25%); }
  			100% { clip-path: circle(70% at 60% 25%); }
		}
		#background3 {
			background-color: #B1D8F7;
			width: 100%;
			height: 100%;
			clip-path: circle(70% at 60% 25%);
			animation: slidein3 .75s ease-in;
		}
		#bg4-wrapper {
			width: 100%;
			height: 100%;
			filter: drop-shadow(0 0 75px rgba(255,250,205, 0.5));
		}
		#background4 {
			background-color: whitesmoke;
			width: 100%;
			height: 100%;
			clip-path: circle(10% at 75% 14%);
		}
    `;

    /**
     *
     * @return {html}
     */
    render() {
        return html`
			<div id="background">
				<div id="bg2-wrapper">
					<div id="background2">
						<div id="bg2-wrapper">
							<div id="background3">
							</div>
						</div>
					</div>
				</div>
			</div>
        `;
    }
}
customElements.define('background-style', BackgroundStyle);
