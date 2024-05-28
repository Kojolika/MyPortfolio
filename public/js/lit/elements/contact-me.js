import {LitElement, html, css} from 'lit';

/**
 *
 */
export class ContactMe extends LitElement {
    static styles = css`
        :host{
            width: 100%;
            display: flex;
            justify-content: center;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 28px;
            width: 100%;
            max-width: 400px;
            font-size: 24px;
        }
        .rounded
        {
            border-radius: 8px;
            box-sizing: border-box;
            background-color: white;
        }
        .input-container {
            display:flex;
            flex-direction: column;
            width: 100%;
            color: white;
        }
        .input-container > input{
            max-width: 252px;
            border: none;
            height: 40px;
        }
        textarea {
            max-width: 100%;
            height: 100%;
            min-height: 160px;
            max-height: 400px;
            border: none;
        }
        button {
            font-size: 24px;
        }
        .white-shadow-hover:hover {
            box-shadow: white 0px 0px 8px;
        }
    `;
    /**
     *
     * @return {html}
     */
    render() {
        return html`
            <form action="https://api.web3forms.com/submit" method="post">
                <input type="hidden" name="access_key" value="9b6bacfb-89ee-44d9-8642-ec3e1d1caa25">

                <div class="input-container">
                    <label for="name">Your Name:</label>
                    <input class="rounded white-shadow-hover" type="text" name="name" id="name" required>
                </div>
                <div class="input-container">
                    <label for="email">Your Email:</label>
                    <input class="rounded white-shadow-hover" type="email" name="email" id="email" required>
                </div>
                <div class="input-container">
                    <label for="message">Your Message:</label>
                    <textarea class="rounded white-shadow-hover" name="message" id="message" required></textarea>
                </div>

                <div class="h-captcha" data-captcha="true"></div>

                <button class="rounded" type="submit">Send Email</button>
            </form>
        `;
    }
}
customElements.define('contact-me', ContactMe);
