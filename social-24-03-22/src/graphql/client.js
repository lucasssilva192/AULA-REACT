import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
    uri: 'https://aula-de-quinta-feira.hasura.app/v1/graphql',
    headers : { 'x-hasura-admin-secret' : 'EtbRTmbBG6cTZANyJMzfmm1bPCDVSe03Mp2Mq1l92kTmA5ntPB3JfqNcyCI4YA5L'},
    cache: new InMemoryCache()
});

export default client;