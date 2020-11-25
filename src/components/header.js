import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rem } from 'polished'

const StyledHeader = styled.header`
  color: #21653f;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: whitesmoke;

  width: calc(100vw - ${rem(32)});
  padding: ${rem(16)};

  @media (min-width: 600px) {
    width: calc(100vw - ${rem(64)});
    padding: ${rem(32)};
  }
`
export const StyledHeading = styled.h1`
  font-family: Futura, Trebuchet MS, Helvetica, Arial, sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: ${rem(28)};

  @media (min-width: 600px) {
    font-size: ${rem(32)};
  }
`

const StyledNav = styled.nav`
  display: none;
  @media (min-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    align-self: center;
  }
`

const StyledMenuNav = styled.nav`
  @media (min-width: 500px) {
    display: none;
  }
  width: 100vw;
  top: 4rem;
  text-align: right;
  @media (max-width: 340px) {
    text-align: left;
  }
`

const StyledMenuHeading = styled(StyledHeading)`
  font-size: ${rem(18)};
  cursor: pointer;
  align-self: center;
  @media (min-width: 500px) {
    display: none;
  }
`

const StyledNavHeading = styled(StyledHeading)`
  font-size: ${rem(18)};

  @media (min-width: 600px) {
    font-size: ${rem(24)};
  }

  margin-right: ${(props) => (props.noMarginRight ? '0' : rem(16))};
  &:last-of-type {
    margin-right: 0;
  }
`

const activeStyles = (width = 1) => ({
  backgroundImage:
    'linear-gradient(to top, rgba(0,0,0,0) 11%, rgba(33,101,63, 0.9) 8%, rgba(33,101,63, 0.9) 15%, rgba(0,0,0,0) 16%)',
})

const Header = ({ siteTitle }) => {
  const [areMenuOptionsVisible, setAreMenuOptionsVisible] = useState(false)

  const toggleMenuOptionsVisible = () => {
    setAreMenuOptionsVisible(!areMenuOptionsVisible)
  }

  return (
    <StyledHeader>
      <StyledHeading>
        <Link to="/" activeStyle={activeStyles(2)}>
          {siteTitle}
        </Link>
      </StyledHeading>
      <StyledMenuHeading as="h2" onClick={toggleMenuOptionsVisible}>
        Menu
      </StyledMenuHeading>
      {areMenuOptionsVisible && (
        <StyledMenuNav>
          <StyledNavHeading as="h2" noMarginRight={true}>
            <Link
              to="/work"
              activeStyle={activeStyles()}
              partiallyActive={true}
            >
              Work
            </Link>
          </StyledNavHeading>
          <StyledNavHeading as="h2">
            <Link
              to="/talks"
              activeStyle={activeStyles()}
              partiallyActive={true}
            >
              Talks
            </Link>
          </StyledNavHeading>
        </StyledMenuNav>
      )}
      <StyledNav>
        <StyledNavHeading as="h2">
          <Link to="/work" activeStyle={activeStyles()} partiallyActive={true}>
            Work
          </Link>
        </StyledNavHeading>
        <StyledNavHeading as="h2">
          <Link to="/talks" activeStyle={activeStyles()} partiallyActive={true}>
            Talks
          </Link>
        </StyledNavHeading>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
