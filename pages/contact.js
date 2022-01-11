import * as React from "react"
import Link from "next/link"

import Layout from "../components/layout"

import { getMainMenu, getContactDetails } from '../lib/api'
import ContactInfo from "../components/Contact/ContactInfo"
import ContactForm from "../components/Contact/ContactForm"
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const Contact = ({ mainMenu, contactDetails }) => {

  const client = new ApolloClient({
    uri: 'http://dashboard.bunabridals.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Layout menuItems={mainMenu}>
        <ContactInfo contactDetails={contactDetails} />
        <ContactForm />
      </Layout>
    </ApolloProvider>
  )
}

export default Contact

export async function getServerSideProps() {
  const mainMenu = await getMainMenu();
  const contactDetails = await getContactDetails();
  return {
    props: {
      mainMenu,
      contactDetails
    }
  };
}


