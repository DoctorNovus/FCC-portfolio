import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "radio-form-group", shadow: false })
export class RadioFormGroup extends Component {

    render({ text, group, options }) {
            return html `
            <div class="form-group">
                <p>${text}</p>
                    ${options.map(option => html`<label><input type="radio" name=${group} value=${option.value}
                            class="input-radio" ${option.checked ? "checked" : ""}>${option.name}</label>`)}
            </div>
        `;
    }
}