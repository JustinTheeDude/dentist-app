import React from 'react';

const stateContext = React.createContext();

export const Provider = stateContext.Provider;

export const Consumer = stateContext.Consumer;