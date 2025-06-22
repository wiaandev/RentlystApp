import {CssBaseline, ThemeProvider} from '@mui/material';
import React from 'react';
import {CustomRouterProvider} from './Routes';
import {LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {theme} from "./Theme/theme.tsx";
import {Loading} from "./Components/Loading/Loading.tsx";
import {useRelayEnv} from "./Hooks/useRelayEnv.ts";
import {RelayEnvironmentProvider} from "react-relay";
import {AuthContextController} from "./Context/AuthContext.tsx";
import {IEnvironment} from "relay-runtime";
export function App() {
    const {environment, version, resetEnvironment} = useRelayEnv();

    return (
        <AppWithEnvironment
            key={version}
            environment={environment}
            resetEnvironment={resetEnvironment}
        />
    );
}

function AppWithEnvironment(
    {environment, resetEnvironment}: {
        environment: IEnvironment;
        resetEnvironment: () => void;
    },
) {
    return (
        <RelayEnvironmentProvider environment={environment}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-gb'>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <React.Suspense fallback={<Loading />}>
                        {/*<SnackBarProvider>*/}
                        {/*    <ModalContextProvider>*/}
                        <AuthContextController resetEnvironment={resetEnvironment}>
                            <CustomRouterProvider relayEnv={environment} />
                        </AuthContextController>
                        {/*</ModalContextProvider>*/}
                        {/*</SnackBarProvider>*/}
                    </React.Suspense>
                </ThemeProvider>
            </LocalizationProvider>
        </RelayEnvironmentProvider>
    );
}
