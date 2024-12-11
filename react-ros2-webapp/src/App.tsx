import React, { useState } from 'react';
import TextData from './components/TextData';
import Rosconnection from './components/RosConnection';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';

function App() {
  const [ros, setRos] = useState(null);
  return (
    <>
      {/* <Rosconnection rosUrl="ws://localhost:9090" rosDomainId="89"> */}
      <Rosconnection rosUrl="ws://localhost:9090" rosDomainId="89" setRos={setRos} />
      {ros &&
        <>
        <Row>
          <Col>
            <div className="d-flex justify-content-center align-items-center">
              <TextData topicName='/test' ros={ros} />
            </div>
          </Col>
        </Row>
        </>
      }

      <hr/>
      <h3>Connection: <span id="status">N/A</span></h3>
    </>
  );
}

export default App
