"use client";

import { Toaster } from "react-hot-toast";

function ToastProvider() {
  return (
    <Toaster
      position="bottom-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "8px",
          background: "#252B27",
          color: "#fff",
          fontSize: "14px",
        },
        success: {
          iconTheme: {
            primary: "#059669",
            secondary: "#fff",
          },
        },
      }}
    />
  );
}

export default ToastProvider;
