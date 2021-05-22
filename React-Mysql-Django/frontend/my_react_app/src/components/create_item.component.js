import React, { Component } from 'react';
import axios from 'axios';

export default class CreateItem extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeInterests = this.onChangeInterests.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      address: '',
      interests: '',
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeInterests(e) {
    this.setState({
      interests: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const item = {
      username: this.state.username,
      email: this.state.email,
      address: this.state.address,
      interests: this.state.interests,
    };

    console.log(item);


   axios.post('http://127.0.0.1:8000/add/', item)
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });

    window.location = '/';
  }

  render() {
    return (
      <div>
        <center>

        <h3 class="text-dark">Create User With Personal Details</h3>
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label style={{marginRight:610}}>Username: </label>
          <input type="text"
              style={{width:700}}
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>

          <div className="form-group">
            <label style={{marginRight:640}}>Email: </label>
            <input type="text"
                style={{width:700}}
                required
                className="form-control"
                value={this.state.email}
                onChange={this.onChangeEmail}
                />
          </div>

          <div className="form-group">
            <label style={{marginRight:622}}>Address: </label>
            <input type="text"
                style={{width:700}}
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
                />
          </div>

          <div className="form-group">
            <label style={{marginRight:620}}>Interests: </label>
            <input type="text"
                style={{width:700}}
                required
                className="form-control"
                value={this.state.interests}
                onChange={this.onChangeInterests}
                />
          </div>

          <div className="form-group">
                 <input type="submit" value="Create" className="btn btn-primary" />
               </div>
        </form>
         </center>
      </div>
    )
  }
}
