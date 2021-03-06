import React from 'react';
import { RestoreConsumer } from '../restore-service-context/RestoreContext';

const withRestoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <RestoreConsumer>
                {
                    (restoreService) => {
                        return <Wrapped {...props} restoreService = {restoreService}/>
                    }
                }
            </RestoreConsumer>
        );
    }
}


export default withRestoreService;
