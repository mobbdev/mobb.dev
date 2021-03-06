import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Feed from '../components/feed';
import SEO from '../components/seo';

const StyledHero = styled.section`
  text-align: center;

  .shell {
    padding-top: 0;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 16px;
  }
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO
      title="Web developers space"
      description="If you are a web developer this website will be a huge help for you! Trust me."
    />

    <StyledHero>
      <div className="shell">
        <p>
          Thanks for passing by!
          <br />
          This blog is something like my personal library for interesting
          articles related to web development. Also I'll give my best to write
          on some interesting topic once a week, so bear with me.
          <br />
          If you wanna know more about me take a look at my social media
          profiles.
          <br />
          And if you have opportunities for me, or just want to say{' '}
          <em>
            <b>Hi!</b>
          </em>{' '}
          <Link to="/contact">contact</Link> me :)
          <br />
          Cheers!
        </p>
      </div>
    </StyledHero>
    <Feed />
  </Layout>
);

export default IndexPage;
