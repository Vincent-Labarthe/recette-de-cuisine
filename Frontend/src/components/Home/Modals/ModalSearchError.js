import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import store from 'src/store';
import { setErrorStatus } from 'src/actions/recipes';

export default class ModalExampleControlled extends Component {

  handleClose = () => {
    store.dispatch(setErrorStatus(false));
  }

  render() {
    return (
      <Modal
        open={this.props.errorStatus}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="ambulance" content="NO RESULTS" />
        <Modal.Content>
          <h3>Your request didn't get any results. Maybe you asked for a lactose-free recipe containing cheese ;) ? Please try something else !</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color="orange" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Got it
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    );
  }
}
