import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

import "@components/nav-link";

@define({ tag: "nav-bar", shadow: false })
export class NavBar extends Component {

    render({ links }) {
            return html `
            <header id="header">
                <img id="header-img" src="logo.png" alt="Daniel Wedding" />
                <nav id="nav-bar">
                    <ul>
                        ${links.map(link => html`
                        <nav-link href=${link.href} label=${link.label} />`)}
                    </ul>
                </nav>
            </header>
        `;
    }
}