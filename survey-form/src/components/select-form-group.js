import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "select-form-group", shadow: false })
export class SelectFormGroup extends Component {

    render({ text, options }) {
            return html `
            <div class="form-group">
                <p>${text}</p>
                <select id="dropdown" name="role" class="form-control" required>
                    ${options.map(option => html`<option ${option.disabled ? "disabled"  : "" } ${option.selected ? "selected" : ""
                        } value=${option.value ? option.value : "" }>${option.text}</option>`)} 
                </select>
            </div>
        `;
    }
}