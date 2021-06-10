import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <Navbar/>
      <Container>
        <Row>
          <Col className="mt-5">
            <TodoList/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
