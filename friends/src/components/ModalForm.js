import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


export default class FriendUpdate extends React.Component {
    
    
    state = { 
        modal: false,
        name: '',
        age :'' ,
        email: ''
    };
  
    toggle = () => {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

  
    handleSubmit(event) {
      event.preventDefault();
      const form = {
        name: this.state.name,
        team: this.state.team,
        country: this.state.country
      }
      let uri = 'http://localhost:8000/api/formmodal';
      axios.post(uri, form).then((response) => {
       this.setState({
          modal: !this.state.modal
        });
      });
    }
  
  
    render() {
      return (
  
          <div>
          <h1>React Bootstrap Modal Example</h1>
          <Button color="success" onClick={this.toggle}>Open Modal</Button>
          <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>IPL 2018</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <label>Name:</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
              <label>Team:</label>
                  <input type="text" name="age" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                <label>Country:</label>
                  <input type="text" name="email" value={this.country} onChange={this.handleChangeCountry} className="form-control" />
                 </div>
                </div>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
            </form>
          </Modal>
          </div>
        
      );
    }
  }