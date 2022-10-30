import styled from '@emotion/styled';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {
  IconButton,
  InputAdornment,
  Skeleton,
  TableBody,
  TableContainer,
  TableSortLabel,
  TextField,
  Tooltip,
} from '@mui/material';
import MaUTable from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import { CSSProperties, FC, useMemo, useState } from 'react';
import { useLocale } from './AppWrapper';
import { fuzzyFilter } from './lib/tableUtils';

const StyledRow = styled(TableRow)<{ hover: boolean }>`
  cursor: ${({ hover }) => hover && 'pointer'};
`;

const NoRecords = styled.tr`
  font-size: 18px;
  display: table;
  position: absolute;
  margin: 20px auto;
  left: 0;
  right: 0;
  width: 100%;
`;

const StyledTableBody = styled(TableBody)`
  @media (max-width: 1023px) {
    tr {
      :nth-of-type(even) {
        background-color: ${({ theme }) =>
          theme?.['palette']?.background.default};
      }
    }
  }
`;

const StyledCell = styled(TableCell)`
  font-weight: bold !important;
  background-color: ${({ theme }) =>
    theme?.['palette']?.background.paper} !important;
`;

const StyledContainer = styled(TableContainer)`
  overflow: auto;
  width: 100%;
`;

const Table: FC<Props> = ({
  columns,
  data,
  actions,
  onRowClick,
  withSearch,
  selected,
  maxHeight,
  style,
  labelledBy,
}) => {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');

  const { locales } = useLocale();
  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  const array = useMemo(() => new Array(10).fill('blah'), []);

  return (
    <>
      {withSearch && (
        <TextField
          style={{ width: '100%', margin: '15px 0' }}
          label={locales.search}
          value={globalFilter ?? ''}
          onChange={(e) => setGlobalFilter(e.target.value)}
          InputProps={{
            endAdornment: (
              <>
                {globalFilter && (
                  <InputAdornment position="end">
                    <Tooltip title={locales.clear}>
                      <IconButton
                        onClick={() => setGlobalFilter('')}
                        size="large"
                      >
                        <ClearIcon />
                      </IconButton>
                    </Tooltip>
                  </InputAdornment>
                )}
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              </>
            ),
          }}
        />
      )}
      <StyledContainer style={{ maxHeight, ...style }}>
        <MaUTable aria-labelledby={labelledBy} stickyHeader>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup, ind) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <StyledCell key={header.id} colSpan={header.colSpan}>
                    <TableSortLabel
                      hideSortIcon
                      active={Boolean(header.column.getIsSorted())}
                      direction={
                        header.column.getIsSorted() === 'desc'
                          ? 'desc'
                          : header.column.getIsSorted() === 'asc'
                          ? 'asc'
                          : null
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableSortLabel>
                  </StyledCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          {!Boolean(data) ? (
            <StyledTableBody>
              {array.map((row) => (
                <TableRow key={row.id}>
                  {columns.map((col, ind) => (
                    <TableCell key={ind}>
                      <Skeleton variant="text" />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </StyledTableBody>
          ) : table.getRowModel().rows.length > 0 ? (
            <StyledTableBody>
              {table.getRowModel().rows.map((row) => {
                return (
                  <StyledRow
                    selected={selected === row.id}
                    hover={Boolean(onRowClick)}
                    onClick={() => onRowClick && onRowClick(row)}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </StyledRow>
                );
              })}
            </StyledTableBody>
          ) : (
            <tbody style={{ position: 'relative', height: 60 }}>
              <NoRecords>
                <span className="absolute left-0 right-0 text-center">
                  {locales.noRecords}
                </span>
              </NoRecords>
            </tbody>
          )}
        </MaUTable>
      </StyledContainer>
    </>
  );
};

export default Table;

export interface Props {
  columns: ColumnDef<any>[];
  data: any[];
  actions?: any;
  onRowClick?: (row: Row<any>) => void;
  selected?: string;
  withSearch?: boolean;
  maxHeight?: number;
  style?: CSSProperties;
  labelledBy?: string;
}
