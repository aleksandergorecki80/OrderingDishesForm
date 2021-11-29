import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Card, Feed, Button, List } from 'semantic-ui-react';
import Loading from '../static/loading.gif'
import { resetState } from '../actions/orderActions';

const Summary = (props) => {
  const history = useHistory();

  const body = (
    <List>
      {props.app.name && <List.Item><strong>Name:</strong> {props.app.name}</List.Item>}
      {props.app.preparation_time && <List.Item><strong> Preparation time:</strong>{props.app.preparation_time}</List.Item>}
      {props.app.type && <List.Item><strong>Dish type:</strong> {props.app.type}</List.Item>}
      {props.app.type === 'pizza' && (props.app.no_of_slices && <p><strong>Number of slices:</strong> {props.app.no_of_slices}</p>)}
      {props.app.type === 'pizza' && (props.app.diameter && <p><strong>Diameter:</strong> {props.app.diameter}</p>)}
      {props.app.type === 'soup' && (props.app.spiciness_scale && <p><strong>Spiciness:</strong> {props.app.spiciness_scale}</p>)}
      {props.app.type === 'sandwich' && (props.app.slices_of_bread  && <p><strong>Number of slices of bread:</strong> {props.app.slices_of_bread }</p>)}
    </List>
  );
  
  const content = {
    header: props.app.id ? 'Order summary' : 'Order failed',
    submit: props.app.id ? 'Next order' : 'Try again',
    body
  };

  const onSubmit = () => {
    props.resetState()
    history.push('/')
  }

  return (
    <Container className="center">
      <Card>
        <Card.Content>
          <Card.Header>{content.header}</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>{props.app.isLoading ? <img src={Loading} alt="Loading"/> : content.body}</Feed.Event>
            <Feed.Event>
              <Button primary onClick={ onSubmit }>
                {content.submit}
              </Button>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetState: () => {
      dispatch(resetState());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
