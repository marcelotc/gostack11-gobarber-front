import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { Container } from './styles';

import { ToastMessage, useToast } from '../../../hooks/Toast';

interface ToastsProps {
    message: ToastMessage
}

const icons = {
    info: <FiInfo size={24}></FiInfo>,
    error: <FiAlertCircle size={24}></FiAlertCircle>,
    success: <FiCheckCircle size={24}></FiCheckCircle>,
}

const Toast: React.FC<ToastsProps> = ({ message }) => {
    const { removeToast } = useToast();

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id);
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [removeToast, message.id]);

    return (
        <Container
            type={message.type}
            hasDescription={!!message.description}
        >
            {icons[message.type || 'info']}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18}></FiXCircle>
            </button>
        </Container>
    );
}

export default Toast;