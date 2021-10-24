import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "mobile-only", shadow: false })
export class MobileOnly extends Component {

    render({ text }) {
        return html `
            <div class="mobile-hidden">
                <p>${text}</p>
            </div>
        `;
    }
}