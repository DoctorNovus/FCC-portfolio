import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "form-group", shadow: false })
export class FormGroup extends Component {

    render({ iden, text, placeholder, type, min, max }) {
            return html `
            <div class="form-group">
                <label id="${iden}-label" for=${iden}>${text}</label>
                <input type=${type ? type : "text"} ${min ? `min=${min}` : ""} ${max ? `max=${max}` : ""} name=${iden} id=${iden} class="form-control" placeholder=${placeholder} required />
            </div>
        `;
    }
}