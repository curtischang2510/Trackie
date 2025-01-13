import React, { useState, useContext, useEffect } from "react";
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import styles from "../assets/stylesheets/ExpenseTable.module.css";

const columns = [
  {
    accessorKey: "description",
    header: "Description",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "currency",
    header: "Currency",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "amount_in_base_currency",
    header: "Amount in base currency (SGD)",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "tag",
    header: "Tag",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const ExpenseTable = ({ transactions }) => {
  console.log("hello");
  console.log(transactions);
  const table = useReactTable({
    data: transactions,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  console.log(table.getHeaderGroups());
  return (
    <React.Fragment>
      <table className={styles.table} width={table.getTotalSize()}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={styles.th}
                  width={header.getSize()}
                >
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} width={cell.column.getSize()}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.pageInfo}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </p>
      <div className={styles.pageNavigationButtonGroup}>
        <button
          className={styles.pageNavigationButton}
          onClick={() => table.previousPage()}
        >
          {"<"}
        </button>
        <button
          className={styles.pageNavigationButton}
          onClick={() => table.nextPage()}
        >
          {">"}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ExpenseTable;
