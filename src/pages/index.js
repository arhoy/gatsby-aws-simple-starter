import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';

import Layout from '../components/layouts/Layout';
import { Section } from '../components/reusableStyles/sections/Sections';

import SEO from '../hooks/SEO';
export const query = graphql`
  {
    seo: file(relativePath: { eq: "seo/contact.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1000) {
          src
        }
      }
    }

    hero: file(relativePath: { eq: "_contact/ghost.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
const IndexPage = () => (
  <Layout>
    <SEO
      title="Gatsby Starter AWS | Your Blurb"
      description="Your Gatsby Opinionated AWS Starter Template"
    />

    <Section>
      <p>
        Welcome! View Your Admin Dashboard <Link to="/app">here</Link>
      </p>
      <Link to="/app"></Link>
      <Link to="/app/profile">Your profile</Link>
    </Section>
  </Layout>
);

export default IndexPage;
