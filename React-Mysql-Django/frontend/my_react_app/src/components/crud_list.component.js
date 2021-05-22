import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Item = props => (
  <tr>
    <td>{props.item.username}</td>
    <td>{props.item.email}</td>
    <td>{props.item.address}</td>
    <td>{props.item.interests}</td>
    <td>

    <a class="btn btn-primary" href={"update/"+props.item.username} role="button">UPDATE</a> | <a class="btn btn-danger" href="" onClick={() => { props.deleteItem(props.item.username) }}>DELETE</a>
    </td>
  </tr>
)

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = {items: []};
  }

  componentDidMount() {
     axios.get('http://127.0.0.1:8000/')
     .then(response => {
       this.setState({ items: response.data });
       console.log(this.state.items)
     })

     .catch((error) => {
        console.log(error);
     })
  }

  deleteItem(username) {
    axios.delete('http://127.0.0.1:8000/del/'+username)
      .then(res => console.log(res.data));
    this.setState({
      items: this.state.items.filter(el => el.username !== username)
    })
  }

  ItemList() {
    return this.state.items.map(currentitem => {
      return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem.username}/>;
    })
  }

  render() {
    return (

      <div>

  <h3 class="text-dark">User Personal Details</h3>
  <table className="table">
    <thead className="thead-light">
      <tr>
        <th style={{width:250}}>Username</th>
        <th style={{width:250}}>Email</th>
        <th style={{width:250}}>Address</th>
        <th style={{width:250}}>Interests</th>
        <th style={{width:250}}>Update / Delete</th>
      </tr>
    </thead>
    <tbody>
           { this.ItemList() }
            <br/>
    </tbody>
  </table>
</div>
    )
  }
}
