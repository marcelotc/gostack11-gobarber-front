import React from 'react';

import { Container, Toast } from './styles';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

const ToastContainer: React.FC = () => {
    return (
        <Container>
            <Toast hasDescription>
                <FiAlertCircle size={20}></FiAlertCircle>

                <div>
                    <strong>Aconteu um erro</strong>
                    <p>Não foi possúvel ...</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}></FiXCircle>
                </button>
            </Toast>

            <Toast type="success" hasDescription={false}>
                <FiAlertCircle size={20}></FiAlertCircle>

                <div>
                    <strong>Aconteu um erro</strong>
                </div>

                <button type="button">
                    <FiXCircle size={18}></FiXCircle>
                </button>
            </Toast>

            <Toast type="error" hasDescription>
                <FiAlertCircle size={20}></FiAlertCircle>

                <div>
                    <strong>Aconteu um erro</strong>
                    <p>Não foi possúvel ...</p>
                </div>

                <button type="button">
                    <FiXCircle size={18}></FiXCircle>
                </button>
            </Toast>
        </Container>
    );
}

export default ToastContainer;
