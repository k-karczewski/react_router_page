import React, { Component } from 'react';
import "../styles/ContactPage.css";
import {Prompt} from "react-router-dom";

class ContactPage extends Component {
    state = {
        value: ""
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            value: "",
        })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value,
        });
    }

    render() { 
        return ( 
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Napisz do nas</h3>
                    <textarea 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder="Wpisz wiadomość..."/>
                    <button>Wyślij</button>
                </form>
                <Prompt
                    when={this.state.value}
                    message="Masz niezapisane zmiany. 
                            Czy na pewno chcesz opuścić tę stronę?" 
                    />
            </div>
        );
    }
}
 
export default ContactPage;