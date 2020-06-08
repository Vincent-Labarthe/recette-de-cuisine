import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import store from 'src/store';
import { setAddToFavoriteStatus, closeAllModals } from 'src/actions/recipes';

export default class ModalExampleControlled extends Component {

  handleClose = () => {
    store.dispatch(setAddToFavoriteStatus(false));
    store.dispatch(closeAllModals());
  }

  handleFav = () => {
    store.dispatch(setAddToFavoriteStatus(false));
    store.dispatch(closeAllModals());
    window.location.href = 'http://localhost:8080/favorite-recipes';
  }

  render() {
    return (
      <Modal
        open={this.props.addToFavoriteStatus}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="heart outline" content="RECIPE ADDED TO YOUR FAVORITES" />
        <Modal.Content>
          <h3>Recipe successfully added to your favorite recipes ! Do you want to keep exploring recipes or access to your favorite recipes ?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Link to="/">
            <Button color="orange" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Keep exploring
            </Button>
          </Link>
          <Link to="/favorite-recipes">
            <Button color="orange" onClick={this.handleFav} inverted>
              <Icon name="checkmark" /> My favorite recipes
            </Button>
          </Link>
        </Modal.Actions>
      </Modal>
    );
  }
}
