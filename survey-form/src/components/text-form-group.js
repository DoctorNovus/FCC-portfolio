import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "text-form-group", shadow: false })
export class TextFormGroup extends Component {

    render({ iden, text, placeholder, group }) {
        return html `
            <div class="form-group">
                        <p>${text}</p>
                        <textarea id=${iden} class="input-textarea" name=${group} placeholder=${placeholder}></textarea>
                    </div>
        `;
    }
}