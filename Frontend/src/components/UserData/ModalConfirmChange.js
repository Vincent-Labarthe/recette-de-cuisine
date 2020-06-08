import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    // console.log('triggerConnexion :', this.props.triggerConnexion);
    // console.log('modalOpen :', this.state.modalOpen);
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
          icon={(this.props.triggerConnexion) ? 'check':'warning sign'}content='CONNEXION'
        />
        <Modal.Content>
          <h3>You are now connected !!!</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/grocery-lists">
            <Button color='orange' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}
