import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Test.css';

function Test() {
  return (
    <div class="flex-container">

  <div class="flex-child magenta">
    Flex Column 1
  </div>
  
  <div class="flex-child green">
    Flex Column 2
  </div>
  
</div>
  );
}

export default Test;