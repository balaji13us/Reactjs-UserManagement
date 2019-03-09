import React from 'react';
import Alert from 'react-bootstrap/Alert';
const UIResponse = (props) => {

    if (props.result!=null && props.result.code !=null && props.result.code!=="") {
        if (props.result.code === 'Success') {
            return (
                <div>
                    <Alert dismissible variant="success">
                    <Alert.Heading>Success</Alert.Heading>
                    Status Code: {props.result.status}<br/>
                    Status Message: {props.result.statusMessage}
                    </Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert dismissible variant="danger">
                    <Alert.Heading>Error</Alert.Heading>
                    Status Code: {props.result.status}<br/>
                    Status Message: {props.result.statusMessage}
                    </Alert>
                </div>
            );
        }
    } else{
        return null;
    }
}
export default UIResponse;
