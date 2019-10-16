import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledHeader = styled.header`
  color: seagreen;
  width: calc(100vw - 4rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 2rem;
`
export const StyledHeading = styled.h1`
  font-family: Futura, Trebuchet MS, Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
`;

const StyledNavHeading = styled(StyledHeading)`
font-size: 1.5rem;
  margin-right: 1rem;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeading>
      <Link to="./">
        {siteTitle}
      </Link>
    </StyledHeading>
    <StyledNav>
      <StyledNavHeading as="h2">
        <Link to="./#work">
          Work
        </Link>
      </StyledNavHeading>
      <StyledNavHeading as="h2">
        <Link to="./talks">
          Talks
        </Link>
      </StyledNavHeading>
    </StyledNav>
  </StyledHeader>
)

export default Header
