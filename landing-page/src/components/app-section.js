import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import main from "@styles/app-section.css";

@define({ tag: "app-section", shadow: true, styles: [main] })
export class AppSection extends Component {

    render() {
        return html `
            <section class="section">
                <slot></slot>
            </section>
        `;
    }
}