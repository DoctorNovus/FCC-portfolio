import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import main from "@styles/info-wrapper.css";

@define({ tag: "info-wrapper", shadow: true, styles: [main] })
export class InfoWrapper extends Component {

    render({ title }) {
        return html `
            <div class="info-wrapper">
                <h1>${title}</h1>
                <slot></slot>
            </div>
        `;
    }
}