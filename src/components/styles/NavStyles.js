import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  width: 100vw;
  display: flex;
  ${'' /* justify-content: end; */}
  font-size: 2rem;
  background: #616161;
  border-bottom: 1px solid white;
  .links {
  display: flex;
  justify-content: space-between;
  }
  .navLogo {
   
    margin-top: auto;
    margin-bottom: auto;
  }
  a .navLogo {
    text-decoration: none;
  }
  img {
    height: 50px;
  }
  a,
  button {
    color: #EFD81D;
    text-decoration: none;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 2px;
      ${'' /* background: lightgrey; */}
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      ${'' /* background: #EFD81D; */}
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: none;
      &:after {
        width: calc(100% - 60px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
  @media (max-width: 1300px) {
    ${'' /* border-top: 1px solid lightgrey; */}
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;