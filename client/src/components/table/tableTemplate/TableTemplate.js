import React from 'react'
import "./TableTemplate.css"
import { useTable } from 'react-table'

export default function Table(props) {
    
    const data = React.useMemo(
        () => props.data,
        [props.data]
    )

    const columns = React.useMemo(
        () => props.column,
        [props.column]
    )

    // init table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns,
        data,
        initialState: {
            hiddenColumns: ["jobId"]
        }},
        props.tableHooks)

    return (
        <div className="table">
            <table {...getTableProps()} style={{ border: 'none' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className="tableCol"
                                    {...column.getHeaderProps()}
                                    style={{
                                        fontSize: 12,
                                        padding: 15,
                                        background: 'rgb(122, 192, 254)',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontFamily: "Space Grotesk"
                                    }}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                
                                            {...cell.getCellProps()}
                                            style={{
                                                color: 'black',
                                                padding: 10,
                                                background: 'rgb(250, 250, 244)',
                                                fontFamily: 'Open Sans',
                                                borderCollapse: "collapse",
                                                fontSize: 12,
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}