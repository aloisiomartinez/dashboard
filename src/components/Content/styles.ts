import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;

  background-color: ${props => props.theme.colors.primary};
  padding-left: 20px;

  border-right: 1px solid ${props => props.theme.colors.gray};
`;
