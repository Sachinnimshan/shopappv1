import React from 'react';
import {Alert} from 'react-bootstrap';

function MessageBox(props) {
    return (
        <div>
            <Alert variant='danger'>
            <Alert.Heading>{props.children}</Alert.Heading>
            </Alert>
        </div>
    )
}

export default MessageBox;
