import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import main from "@styles/pricing-wrapper.css";

@define({ tag: "pricing-wrapper", shadow: true, styles: [main] })
export class PricingWrapper extends Component {

    render({ title }) {
        return html `
            <div class="pricing-wrapper">
                <h1>${title}</h1>
                <slot></slot>
            </div>
        `;
    }
}