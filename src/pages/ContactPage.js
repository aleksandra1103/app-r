import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import '../styles/ContactPage.css';


class ContactPage extends Component {

  state = {
    value: "",
    isEmpty: false,
  }

  handleSubmit = (e) => {
    e.peventDefault();
    this.setState({
      value: "",
      isEmpty: true,
    })
  }

  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.setState({
        value: e.target.value,
        isEmpty: false,
      });
    } else {
      this.setState({
        value: e.target.value,
        isEmpty: true,
      });
    }
  }

  render() {
    return (
      <>
        <div className='contact'>
          <form>
            <h3>Napisz do nas</h3>
            <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
            <button>Wyślij</button>
          </form>
          <Prompt
            when={!this.state.isEmpty}
            message='Masz niewypełniony formularz. Czy napewno chcesz opuścic tą stronę?'
          />
        </div>
      </>
    );
  }
}

export default ContactPage;