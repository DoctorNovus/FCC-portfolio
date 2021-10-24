import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "app-form", shadow: false })
export class AppForm extends Component {

    render({ iden, action, options }) {
            return html `
            <form id=${iden} action=${action}>
                ${options.map(option => options.type == "textarea" ? html`<textarea id=${option.name} name=${option.name} placeholder=${option.placeholder}></textarea>` : html`<input type=${option.type} id=${option.name} name=${option.name} placeholder=${option.placeholder} />`)}
            </form>
        `;
    }
}