import styled from 'styled-components';

const StyledTable = styled.div`
  margin: 0 auto;
  padding: 1rem;
  font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  table {
    margin: 0 auto;
    border-spacing: 0;
    border: 1px solid black;
    font-size: 1rem;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :last-child {
        border-right: 0;
      }
    }
  }
  .pagination {
    text-align: center;
    padding: 0.5rem;
    font-size: 1.1rem;
  }
`;

export default StyledTable;
