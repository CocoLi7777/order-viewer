import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  margin: 0 auto;
  height: 125px;
  background: white;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: white;
  width: 40%;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #dcdde1;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: whtie;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: black;
    z-index: 1000;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: black;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 960px) {
      font-size: 28px;
    }
    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`;
