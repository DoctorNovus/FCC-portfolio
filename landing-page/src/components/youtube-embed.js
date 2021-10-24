import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";

@define({ tag: "youtube-embed", shadow: false })
export class YoutubeEmbed extends Component {

    render({ url }) {
        return html `
            <iframe id="video" src=${url} title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
        `;
    }
}