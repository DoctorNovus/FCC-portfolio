import { Component, html } from "@exalt/core";
import { define } from "@exalt/core/decorators";
import "./index.css";

import "@components/form-group";
import "@components/radio-form-group";
import "@components/select-form-group";
import "@components/checked-form-group";
import "@components/text-form-group";

@define({ tag: "app-root", shadow: false })
export class App extends Component {

    render() {
        return html `
            <div class="container">
                <header class="header">
                    <h1 id="title" class="text-center">Daniel Wedding Survey Form</h1>
                    <p id="description" class="description text-center">
                        Thank you for your provided input ❤️
                    </p>
                </header>
                <form id="survey-form">
                    <form-group iden="name" text="First (Preferred) Name" placeholder="Enter your first name" />
                    <form-group iden="last-name" text="Last Name" placeholder="Enter your last name" />
                    <form-group iden="number" min="1" max="116" type="number" text="Age" placeholder="Enter your age" />
                    <form-group iden="email" type="email" text="Email" placeholder="Enter your email" />
                    <form-group iden="phone" type="phone" text="Phone" placeholder="Enter your phone number" />
                    <form-group iden="address" type="address" text="Address" placeholder="Enter your address" />
                    <form-group iden="city" text="City" placeholder="Enter your city" />
                    <form-group iden="state" text="State" placeholder="Enter your state" />
                    <form-group iden="zip" text="Zip" placeholder="Enter your zip code" />
                    <radio-form-group 
                        text="How are you feeling?"
                        group="feeling",
                        options=${
                            [
                                {name: "Happy", value: "happy"},
                                {name: "Neutral", value: "neutral", checked: true},
                                {name: "Sad", value: "sad"},
                                {name: "Angry", value: "angry"},
                            ]
                        } />
                    <select-form-group 
                        text="What would you say is a safe space for you?",
                        options=${[
                            { value: "home", text: "Home", selected: true},
                            { value: "work", text: "Work"},
                            { value: "school", text: "School"},
                            { value: "other", text: "Other"}
                        ]}
                        />
                    <checked-form-group 
                        text="Which of the these would be helpful?",
                        group="helpful",
                        options=${[
                            {value: "sex-ed", name: "Sex Ed"},
                            {value: "nutrition-services", name: "Nutrition Services"},
                            {value: "vaccines", name: "Vaccines"}
                        ]}
                        />
                    <text-form-group iden="comments" name="comment" placeholder="Enter your comments here..." />                    
                    <div class="form-group">
                        <button type="submit" id="submit" class="submit-button">
                            Submit
                        </button>
                    </div>
                </form>
            </div>

        `;
    }
}