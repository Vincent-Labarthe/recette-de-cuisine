import React, { Component } from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen} color="orange" type="submit">Send Reset Link</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='mail outline' content='SENDING MAIL' />
        <Modal.Content>
          <h3>Please check your mailbox to create a new password</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color='orange' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Got it
          </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    )
  }
}
