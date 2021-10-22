import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "./index.css";

@define({ tag: "app-root", shadow: false })
export class App extends Component {

    render() {
        return html `
            <div id="main">
                <h1 id="title">Elon Musk</h1>
                <div id="content" class="text-center">
                    <div id="img-div">
                        <img id="image"
                            src="data:image/jpeg;base64,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"
                            alt="Elon Musk" class="responsive" />
                        <div id="img-caption">
                            <h3 class="text-center">"People should pursue what they're passionate about. That will make them happier
                                than
                                pretty much anything else."</h3>
                        </div>
                    </div>
                    <div id="tribute-info" class="text-center">
                        <p>
                            <strong>Born:</strong> June 28, 1971
                        </p>
                        <p>
                            <strong>Died:</strong> N/A
                        </p>
                        <p>
                            <strong>Current Companies:</strong> Tesla, SpaceX, and SolarCity
                        </p>
            
                        <p>
                            <strong>Career Highlights:</strong>
                        </p>
                        <a href="https://www.tesla.com/about/history/">Tesla</a>
                        <a href="https://www.spacex.com/">SpaceX</a>
                        <a href="https://www.solarcity.com/">SolarCity</a>
                    </div>
                    <br>
                    <div id="tribute-link-div">
                        <a id="tribute-link" target="_blank" href="https://www.biography.com/business-figure/elon-musk">More Info About Elon Here</a>
                    </div>
                </div>
            </div>
        `;
    }
}