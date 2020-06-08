import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import store from 'src/store';
import { setAddToListStatus, closeAllModals } from 'src/actions/recipes';

export default class ModalExampleControlled extends Component {

  handleClose = () => {
    store.dispatch(setAddToListStatus(false));
    store.dispatch(closeAllModals());
  }

  render() {
    return (
      <Modal
        open={this.props.addToListStatus}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="trophy" content="RECIPE ADDED" />
        <Modal.Content>
          <h3>Recipe successfully added to your grocery list ! Do you want to keep exploring recipes or access to your grocery {(this.props.userConnected) ? 'lists ?' : 'list ?'}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color="orange" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Keep exploring
            </Button>
          </Link>
          {(this.props.userConnected) ? (
            <Link to="/grocery-lists">
              <Button color="orange" onClick={this.handleClose} inverted>
                <Icon name="checkmark" /> My grocery lists
              </Button>
            </Link>
          ) : (
            <Link to="/temporary-grocery-list">
              <Button color="orange" onClick={this.handleClose} inverted>
                <Icon name="checkmark" /> My grocery list
              </Button>
            </Link>
          )}
        </Modal.Actions>
      </Modal>
    );
  }
}
