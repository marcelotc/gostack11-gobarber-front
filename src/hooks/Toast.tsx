import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer';

interface ToastContextData {
    addToast():  void;
    removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
    const addToast = useCallback(() => { 
        console.log('addToast');
    }, []);

    const removeToast = useCallback(() => {
        console.log('removeToast');
     }, []);

    return (
        <ToastContext.Provider value={{ addToast, removeToast }}>
            {children}
            <ToastContainer></ToastContainer>
        </ToastContext.Provider>
    );
}

function useToast(): ToastContextData {
    const context = useContext(ToastContext);

    if (!context) {
        throw new Error('userAuth must be used within an AuthProvider');
    }

    return context;
}

export {ToastProvider, useToast}