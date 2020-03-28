import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { Section, Container1200 } from '../../reusableStyles/sections/Sections';
import { UserContext } from '../../../context/user-context';

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
  const user = useContext(UserContext);

  const { username } = user;

  return (
    <>
      <Header>
        <p>
          Hello <span>{username}</span>! This is your Dashboard
        </p>
        <p> {}</p>
      </Header>
      <Section>
        <Container1200></Container1200>
      </Section>
    </>
  );
};
