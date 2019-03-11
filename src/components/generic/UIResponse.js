import React from 'react';
import Alert from 'react-bootstrap/Alert';
const UIResponse = (props) => {

    let result = '';
    console.log(props);


    if (props.result.showResult ) {

        if (props.result.code === 'Success') {
            result = 'Success';
            return (
                <div>
                <Alert dismissible variant='success'>
                    <Alert.Heading>{props.result.action} {result}</Alert.Heading>
                    Status Code: {props.result.status}<br />
                    Status Text: {props.result.statusText}
                </Alert>
            </div>
            );
        } else {
            result = 'Failed';
            return (
                <div>
                <Alert dismissible variant='danger'>
                    <Alert.Heading>{props.result.action} {result}</Alert.Heading>
                    Status Code: {props.result.status}<br />
                    Status Text: {props.result.statusText}
                </Alert>
            </div>
            );
        }
    } else {

        return null;
    }
}
export default UIResponse;
