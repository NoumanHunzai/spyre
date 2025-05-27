import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { Upload, X } from "lucide-react";

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedFileTypes?: string;
  maxFileSize?: number; // in bytes
  className?: string;
  label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  acceptedFileTypes = "*",
  maxFileSize = 5 * 1024 * 1024, // 5MB default
  className = "",
  label = "Drag & Drop or Click to Upload",
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const validateFile = (file: File): boolean => {
    if (maxFileSize && file.size > maxFileSize) {
      setError(`File size must be less than ${maxFileSize / (1024 * 1024)}MB`);
      return false;
    }
    setError(null);
    return true;
  };

  const handleFile = useCallback(
    (file: File) => {
      if (validateFile(file)) {
        setSelectedFile(file);
        onFileSelect(file);
      }
    },
    [onFileSelect, maxFileSize]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        handleFile(file);
      }
    },
    [handleFile]
  );

  const removeFile = useCallback(() => {
    setSelectedFile(null);
    setError(null);
  }, []);

  return (
    <div className={`w-full ${className}`}>
      {!selectedFile ? (
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className={`
            relative border-2 border-dashed rounded-lg p-8
            ${
              isDragging
                ? "border-indigo-600 bg-indigo-50"
                : "border-gray-300 hover:border-indigo-400"
            }
            transition-colors duration-200
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            onChange={handleFileInput}
            accept={acceptedFileTypes}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-4">
            <Upload
              className={`w-8 h-8 ${
                isDragging ? "text-indigo-600" : "text-gray-400"
              }`}
            />
            <p className="text-center text-gray-600 font-medium">{label}</p>
            <p className="text-sm text-gray-500">
              {acceptedFileTypes !== "*"
                ? `Accepted types: ${acceptedFileTypes}`
                : "All file types accepted"}
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-indigo-100 rounded-md">
              <Upload className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <p className="font-medium text-gray-700">{selectedFile.name}</p>
              <p className="text-sm text-gray-500">
                {(selectedFile.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <button
            onClick={removeFile}
            className="p-1 hover:bg-gray-200 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </motion.div>
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default FileUpload;
