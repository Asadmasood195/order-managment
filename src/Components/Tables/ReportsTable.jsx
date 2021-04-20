import React, { Fragment } from 'react'
import { useTable, usePagination, useGlobalFilter, useAsyncDebounce } from 'react-table'
import './styleTable.scss'
import makeData from './makeData'

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Search:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value)
          onChange(e.target.value)
        }}
        placeholder={`${count} records...`}
        style={{
          fontSize: '1.1rem',
        }}
      />
    </span>
  )
}
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    visibleColumns,
    globalFilter,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    useGlobalFilter,
    usePagination,
  )

  // Render the UI for your table
  return (
    <>

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <Fragment key={i}>
              {/* <tr> */}
              <th
                colSpan={visibleColumns.length}
                style={{
                  textAlign: 'left',
                  border: '0'
                }}
              >
                <GlobalFilter
                  preGlobalFilteredRows={preGlobalFilteredRows}
                  globalFilter={globalFilter}
                  setGlobalFilter={setGlobalFilter}
                />
              </th>
              {/* </tr> */}
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th key={i} {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            </Fragment>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="pagination">
        <button className='start_btn' onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button className='previous_btn' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button className='next_btn' onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button className='end_btn' onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span className='page_input_and_row_select'>
          | Go to page:{' '}
          <input
            type="number"
            className='pageNumber_input'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName', // accessor is the "key" in the data
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Visits',
        accessor: 'visits',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Profile Progress',
        accessor: 'progress',
      },
    ],
    []
  )

  const data = React.useMemo(() => makeData(100), [])

  return (
    <Fragment>
      <h4>Top selling Products |Tabular Representation</h4>
      <div className='table_container'>
        <div className="tableWrap">
          <Table columns={columns} data={data} />
        </div>
      </div>
    </Fragment>
  )
}

export default App
