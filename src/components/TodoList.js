import React from 'react';
import {ListGroup, Form} from "react-bootstrap";

export default props => (
  <ListGroup>
    <ListGroup.Item>
        <Form.Check type="checkbox" label="Some random task" />
    </ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
);