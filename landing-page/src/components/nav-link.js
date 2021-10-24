import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "nav-link", shadow: false })
export class NavLink extends Component {

    render({ href, label }) {
        return html `
            <li><a href=${href} class="nav-link">${label}</a></li>
        `;
    }
}