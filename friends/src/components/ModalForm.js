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
      this.props.updateFriend(this.props.id, this.props.friend);
      this.setState({
        modal: !this.state.modal
      });
    }
  
  
    render() {
      return (
          <div>
          <Button color="success" onClick={this.toggle}>Update</Button>
          <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>IPL 2018</ModalHeader>
            <ModalBody>
            <div className="row">
              <div className="form-group col-md-4">
              <input type="text" name="name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="name" />
                </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                  <input type="text" name="age" value={this.state.team} onChange={this.handleChangeTeam} className="form-control" placeholder="age" />
                 </div>
                </div>
              <div className="row">
               <div className="form-group col-md-4">
                  <input type="text" name="email" value={this.country} onChange={this.handleChangeCountry} className="form-control" placeholder="email" />
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