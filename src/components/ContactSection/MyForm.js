import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xbjzpwvg"
                method="POST"
            >
                <input type="text" className="form-control" name="Name" placeholder="Full Name" required />
                <input type="email" className="form-control" name="Email" placeholder="Email Address" required />
                <textarea cols="60" className="form-control" rows="5" name="Message"
                    placeholder="Write Your Message Here..."></textarea>
                {status === "SUCCESS" ? <p className="text-success lead mt-3">Thanks! Message sent</p> :
                    <button type="submit" className="btn btn-md btn-block btn-warning text-light mt-3" id="my-form-button">SEND</button>}
                {status === "ERROR" && <p className="text-danger lead mt-3">Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}