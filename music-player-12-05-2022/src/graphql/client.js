import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: 'https://spotyfalso.hasura.app/v1/graphql',
    headers: {'x-hasura-admin-secret' : '1vDUn0eyeustGyEDFSJuv6JHmMCBMeFJqahVylcqFYmOM1VY79gy9nDKx2K1czb3'},
    cache: new InMemoryCache(),
});