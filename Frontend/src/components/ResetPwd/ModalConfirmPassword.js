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
        trigger={<Button onClick={this.handleOpen} color="orange" type="submit">Reset password</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='check' content='PASSWORD REGISTRATED' />
        <Modal.Content>
          <h3>Thanks you!!!</h3>
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
