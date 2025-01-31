import React from 'react';
import { Table, Button } from 'react-bootstrap';
import './style.css'; // Importa el archivo CSS si tienes estilos personalizados

const DataTableFiles = ({ filesData, handlePreviousPage, handleNextPage, currentPage, totalPages }) => {
  return (
    <div className="">
      <Table striped bordered hover className="table table-sm">
        <thead className="thead-dark">
          <tr>
            <th>No. File</th>
            <th>File Name</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {filesData
            .filter(file => file.lines !== "El archivo no posee lineas validas")
            .map((file, fileIndex) => (
              Array.isArray(file.lines) ? (
                file.lines.map((line, lineIndex) => (
                  <tr key={`${fileIndex}-${lineIndex}`}>
                    <td>{fileIndex + 1}</td>
                    <td>{file.file}</td>
                    <td>{line.text}</td>
                    <td>{line.number}</td>
                    <td>{line.hex}</td>
                  </tr>
                ))
              ) : (
                <tr key={fileIndex}>
                  <td>{fileIndex + 1}</td>
                  <td>{file.file}</td>
                  <td colSpan="3">{file.lines}</td>
                </tr>
              )
            ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between mt-3">
        <Button variant="primary" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </Button>
        <Button variant="primary" onClick={handleNextPage} disabled={currentPage === totalPages}>
          Siguiente
        </Button>
      </div>
    </div>
  );
};

export default DataTableFiles;