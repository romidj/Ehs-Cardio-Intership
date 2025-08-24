import React, { useState } from "react";
import Sidebar from "../../components/admin/Sidebar";
import Testdata from "../../assets/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDay,
  faChevronLeft,
  faChevronRight,
  faPhone,
  faSearch,
  faUpDown,
  faUser,
  faLocation,
  faUserDoctor,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  useReactTable
} from "@tanstack/react-table";

const Todayrdv = () => {
  const [showOrdonnance, setShowOrdonnance] = useState(false);
  const [ordonnanceUrl, setOrdonnanceUrl] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedPhone, setSelectedPhone] = useState(null);

  const [data] = useState(() => [...Testdata]); // Replace with DB fetch later
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");

  // Handlers
  const openOrdonnanceModal = (url) => {
    setOrdonnanceUrl(url);
    setShowOrdonnance(true);
  };

  const openConfirmModal = (phone) => {
    setSelectedPhone(phone);
    setShowConfirm(true);
  };

  // Column definition inside the component
  const columnHelper = createColumnHelper();
  const columns = [
    columnHelper.accessor("id", {
      header: () => (
        <span className="flex items-center">
          ID
        </span>
      ),
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("fullName", {
      header: () => (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Nom et Prénom
        </span>
      ),
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("date_naissance", {
      header: () => (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faCalendarDay} className="mr-2" />
          Date de Naissance
        </span>
      ),
      cell: (info) => info.getValue()
    }),

    columnHelper.accessor("phone", {
      header: () => (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faPhone} className="mr-2" />
          Téléphone
        </span>
      ),
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("medecin", {
      header: () => (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faUserDoctor} className="mr-2" />
          Médecin
        </span>
      ),
      cell: (info) => info.getValue()
    }),
    columnHelper.accessor("heure", {
      header: () => (
        <span className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-2" />
          Heure
        </span>
      ),
      cell: (info) => info.getValue()
    }),
    columnHelper.display({
      id: "ordonnance",
      header: "Ordonnance",
      enableSorting: false,
      cell: ({ row }) => (
        <button
          onClick={() => openOrdonnanceModal(row.original.ordonnanceUrl)}
          className="px-3 py-1 bg-blue-900 text-white rounded-full"
        >
          Voir
        </button>
      )
    }),

  ];

  // Table
  const table = useReactTable({
    data,
    columns,
    state: { sorting, globalFilter },
    initialState: { pagination: { pageSize: 5 } },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  });

  return (

      <div className="flex-1 ml-2 flex flex-col min-h-screen py-5 px-4 sm:px-6 lg:px-2">
        {/* Search */}
        <div className="mb-4 relative">
          <input
            value={globalFilter ?? ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size="lg"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      <div
                        {...{
                          className: header.column.getCanSort()
                            ? "cursor-pointer select-none flex items-center"
                            : "",
                          onClick: header.column.getToggleSortingHandler()
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {header.column.getCanSort() && (
                          <FontAwesomeIcon icon={faUpDown} className="ml-2" />
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-white divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-sm text-blue-950"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700">
          <div className="flex items-center mb-2 sm:mb-0">
            <span className="mr-2">Éléments par page</span>
            <select
              className="border border-gray-300 rounded-md shadow-sm focus:ring-blue-900 focus:border-blue-900 p-2"
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            >
              {[5, 10, 20, 30].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="sm" />
            </button>
            <span className="flex items-center">
              <input
                type="number"
                min={1}
                max={table.getPageCount()}
                value={table.getState().pagination.pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                }}
                className="w-16 p-2 rounded-md border border-gray-300 text-center"
              />
              <span className="ml-1">of {table.getPageCount()}</span>
            </span>
            <button
              className="p-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              <FontAwesomeIcon icon={faChevronRight} size="sm" />
            </button>
          </div>
        </div>

        {/* Ordonnance Modal */}
        {showOrdonnance && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white p-4 rounded shadow-lg max-w-lg">
              <img
                src={ordonnanceUrl}
                alt="Ordonnance"
                className="max-w-full max-h-[80vh]"
              />
              <button
                onClick={() => setShowOrdonnance(false)}
                className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
              >
                Fermer
              </button>
            </div>
          </div>

        )}

        {/* Confirm Modal */}
        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40">
            <div className="bg-white p-4 rounded shadow-lg w-96">
              <h2 className="text-lg font-bold mb-4">Confirmer RDV</h2>
              <input type="date" className="border p-2 w-full mb-2" />
              <input type="time" className="border p-2 w-full mb-4" />
              <button
                onClick={() => {
                  console.log(`SMS envoyé à ${selectedPhone}`);
                  setShowConfirm(false);
                }}
                className="px-4 py-2 bg-green-600 text-white rounded"
              >
                Envoyer SMS
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="ml-2 px-4 py-2 bg-gray-600 text-white rounded"
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
  );
};

export default Todayrdv;
