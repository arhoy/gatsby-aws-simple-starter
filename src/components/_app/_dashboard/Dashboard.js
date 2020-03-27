import React from 'react';
import styled from '@emotion/styled';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import { getCurrentUser } from '../../../utils/auth';

const Header = styled.div`
  background: ${props => props.theme.colors.lightgrey};
  & p {
    padding: 1rem 2rem;
    opacity: 0.9;
  }
  & span {
    font-weight: 700;
    opacity: 1;
  }
`;

export const Dashboard = () => {
  const user = getCurrentUser();
  return (
    <>
      <Header>
        <p>
          Hello <span>{user.username}</span>! This is your Dashboard
        </p>
      </Header>
      <Section>
        <Container1200></Container1200>
      </Section>
    </>
  );
};
