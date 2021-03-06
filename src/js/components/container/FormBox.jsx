import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "../formshowcase/InputField.jsx";

class FormBox extends Component {
    constructor() {
        super();

        this.state = {
            seo_title: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}

export default FormBox;

/*  Tell our React component to hook itself into the id create-article-form */
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormBox />, wrapper) : false;