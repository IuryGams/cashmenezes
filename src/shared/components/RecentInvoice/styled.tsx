"use client"
import styled from "styled-components"

export const TableContainer = styled.div`
  width: 100%;
  margin-bottom: 40px;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  border-bottom: 2px solid #f0f0f0;
`;

export const Tab = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive }) => (isActive ? '#4d5bff' : '#aaa')};
  border-bottom: ${({ isActive }) => (isActive ? '3px solid #4d5bff' : 'none')};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHeader = styled.thead`
  background-color: #f9f9f9;
`;

export const HeaderCell = styled.th`
  padding: 10px;
  text-align: left;
  color: #777;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f0f0f0;
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  color: #333;
`;

export const AmountCell = styled(TableCell)<{ isPositive: boolean }>`
  color: ${({ isPositive }) => (isPositive ? 'green' : 'red')};
`;

export const DownloadButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #4d5bff;
  background: none;
  color: #4d5bff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #4d5bff;
    color: white;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PaginationButton = styled.button<{ isActive?: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  background-color: ${({ isActive }) => (isActive ? '#4d5bff' : 'none')};
`;