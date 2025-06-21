import * as React from 'react';
import {graphql} from 'relay-runtime';
import {useLazyLoadQuery} from 'react-relay';
import {AuthContextQuery} from "./__generated__/AuthContextQuery.graphql.ts";

interface AuthContextType {
    authenticated: boolean;
    me: AuthContextQuery['response']['me'];
}

export const AuthContext = React.createContext<AuthContextType>({
    authenticated: false,
    me: {id: "", email: ""},
});

export function useAuthContext() {
    return React.useContext(AuthContext);
}

export const AuthContextController = React.memo(function AuthContextController({
                                                                                   children,
                                                                               }: {
    children: React.ReactNode;
    resetEnvironment: () => void;
}) {
    const data = useLazyLoadQuery<AuthContextQuery>(
        graphql`
            query AuthContextQuery {
                me {
                    # eslint-disable-next-line relay/unused-fields
                    id
                    email
                }
            }`,
        {},
    );

    const value = React.useMemo(
        () => ({
            authenticated: !!data.me,
            me: data.me,
        }),
        [data],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
});
