import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MyApp ({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
    cache: new InMemoryCache()
  })
  return (
    <ApolloProvider client={client}>
    {/* <Layout> */}

    <Header />
      <Component {...pageProps} />
      <Footer />

    {/* </Layout> */}
     </ApolloProvider>
  )
}
