import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "checked-form-group", shadow: false })
export class CheckedFormGroup extends Component {

    render({ text, group, options }) {
            return html `
            <div class="form-group">
                <p>
                    ${text}
                    <span class="clue">(Check all that apply)</span>
                </p>
                ${options.map(option => html`<label><input name=${group} value=${option.value} type="checkbox" class="input-checkbox" />${option.name}</label>`)}
            </div>
        `;
    }
}