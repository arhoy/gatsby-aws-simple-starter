import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  background: ${props => props.theme.colors.lightgrey};
`;

export const Dashboard = () => {
  return <Container>This si the dashboard</Container>;
};
