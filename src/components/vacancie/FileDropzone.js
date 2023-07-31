import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { MdOutlineDocumentScanner } from "react-icons/md";
import CustomButton from "../shared/CustomButton";
import "../../assets/css/components/contact/FileDropzone.css";

const FileDropzone = ({ uploadedFile, setUploadedFile }) => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 1) {
      const file = acceptedFiles[0];
      setUploadedFile(file);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ".pdf",
    multiple: false,

    validator: (file) => {
      const allowedTypes = ["application/pdf"];

      if (!allowedTypes.includes(file.type)) {
        return "Formato de archivo no válido.";
      }
      return null;
    },
  });

  const getDropzoneClass = () => {
    if (isDragAccept) {
      return "dropzone accept";
    }
    if (isDragReject) {
      return "dropzone reject";
    }
    if (isDragActive) {
      return "dropzone active";
    }
    return "dropzone";
  };

  return (
    <>
      <div className={getDropzoneClass()} {...getRootProps()}>
        {!uploadedFile && (
          <MdOutlineDocumentScanner size={50} color="#3B97D3" />
        )}
        <input {...getInputProps()} />
        {isDragAccept && <p className="mt-2">Suelta el archivo aquí...</p>}
        {isDragReject && <p className="mt-2">Formato de archivo no válido.</p>}
        {!isDragActive && !uploadedFile && (
          <p className="mt-2">
            Arrastra y suelta el archivo aquí, o haz clic para seleccionarlo.
          </p>
        )}
        {uploadedFile && (
          <>
            <p>{uploadedFile.name}</p>
          </>
        )}
      </div>
      {uploadedFile && (
        <div
          className="row"
          style={{ textAlign: "center", marginBottom: "10px" }}
        >
          <div className="col">
            <CustomButton
              text="Cancelar"
              type="button"
              color="danger"
              size="medium"
              onClick={() => setUploadedFile(null)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FileDropzone;
