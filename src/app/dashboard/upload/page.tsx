import React from "react";

import { Metadata } from "next";
import FileUploader from "@/components/FileUploader";

export const metadata: Metadata = {
  title: "Upload",
};

function UploadPage() {
  return (
    <div>
      <FileUploader />
    </div>
  );
}

export default UploadPage;
