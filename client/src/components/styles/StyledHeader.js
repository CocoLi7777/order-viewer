import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #dcdde1;
  padding: 0 20px;
  box-sizing: border-box;
  font-size: 3.5rem;
  text-align: center;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }
`;
