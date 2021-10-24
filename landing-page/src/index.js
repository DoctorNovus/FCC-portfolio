import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "./index.css";

import "@components/nav-bar";
import "@components/mobile-only";
import "@components/app-section";
import "@components/info-wrapper";
import "@components/pricing-wrapper";
import "@components/youtube-embed";
import "@components/app-form";

@define({ tag: "app-root", shadow: false })
export class App extends Component {

    render() {
        return html `
            <nav-bar links=${[ { href: "#info" , label: "Info"  }, { href: "#pricing" , label: "Pricing"  }, { href: "#form" ,
                label: "Contact Us"  }, ]} />
            <mobile-only text="Daniel Wedding" />
            <main id="main">
                <app-section id="info">
                    <info-wrapper title="Who are we?">
                    Hello, my name is Daniel Wedding! 
                    I am a software developer and designer based in the US. 
                    I have been working in the industry for over 5 years. 
                    I have a passion for creating and building things that are useful for the people around me.
                    </info-wrapper>
                    <info-wrapper title="What do we do?">
                    We provide services to the people in need. 
                    We can help you with your website, mobile app, or network. 
                    We are able to provide support with hosting for a small business or a large company.
                    </info-wrapper>
                    <info-wrapper title="Why pick us?">
                    While small, we are able to provide a great service. 
                    We pay attention to detail and are able to provide services that are unique to you. 
                    We supply the best services and provide custom support unlike any other. 
                    We also can work with you to create a custom solution for your needs.
                    </info-wrapper>
                </app-section>
                <app-section id="video-section">
                <youtube-embed url="https://www.youtube.com/embed/xnO6NlLQBHM" />
                </app-section>
                <app-section id="pricing">
                    <pricing-wrapper title="Pricing">
                        We offer a variety of services. 
                        We can provide you with a custom solution or we can provide you with a service that is already available. 
                        We can also provide you with hosting for a small business or a large company.
                    </pricing-wrapper>
                </app-section>
                <app-section >
                    <app-form iden="form" action="/email-submit"
                              options=${[
                                    {type: "text", name: "name", placeholder: "Enter your name..."},
                                    {type: "email", name: "email", placeholder: "Enter your email..."},
                                    {type: "text", name: "subject", placeholder: "Enter your subject..."},
                                    {type: "textarea", name: "message", placeholder: "Enter your message..."},
                                    {type: "submit", name: "submit", value: "Submit", placeholder: "Submit"}
                                ]}
                              ]} />
                </app-section>
            </main>
        `;
    }
}