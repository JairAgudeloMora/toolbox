import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { getAllDataFiles } from "./api/toolboxApi";
import DataTableFiles from "./DataTableFiles";
import './style.css';

const App = () => {
  const [filesData, setFilesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllDataFiles();
        setFilesData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Calcular los datos a mostrar en la página actual
  const indexOfLastFile = currentPage * itemsPerPage;
  const indexOfFirstFile = indexOfLastFile - itemsPerPage;
  const currentFiles = filesData.slice(indexOfFirstFile, indexOfLastFile);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filesData.length / itemsPerPage);

  // Funciones para manejar el cambio de página
  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Container className="text-center mt-5">
      <h3 className="titles">Test App for Toolbox</h3>
      <DataTableFiles
        filesData={currentFiles}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Container>
  );
};

export default App;