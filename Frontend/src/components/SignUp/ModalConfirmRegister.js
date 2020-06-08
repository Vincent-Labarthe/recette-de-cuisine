import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    console.log('triggerConnexion:' , this.props.triggerConnexion);
    return (
      <Modal
        trigger=
          {
            <Button onClick={this.handleOpen} color="orange" type="submit">
              Submit
            </Button>
          }
        open={this.props.triggerConnexion && this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header 
          icon={(this.props.triggerConnexion) ? 'check':'warning sign'}
          content={(this.props.triggerConnexion)?'YOUR ACCOUNT IS CREATED':'SOMETHING WENT WRONG'}
        />
        <Modal.Content>
          {(this.props.triggerConnexion) && <h3>You are now one of our lovely members... Sign in !!!</h3>}
          {(!this.props.triggerConnexion) && <h3>Please try again...</h3>}
        </Modal.Content>
        <Modal.Actions>
          <Link to="/sign-in">
            <Button color='orange' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}
