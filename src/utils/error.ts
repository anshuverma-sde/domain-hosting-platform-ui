// utils/error.ts

import toast from "react-hot-toast";

export function handleApiError(error: unknown, fallbackMessage = "Something went wrong") {
  let message = fallbackMessage;

  if (
    error &&
    typeof error === "object" &&
    "response" in error &&
    error.response &&
    typeof error.response === "object" &&
    "data" in error.response &&
    error.response.data &&
    typeof error.response.data === "object"
  ) {
    const data = error.response.data as { error?: string; message?: string };
    message = data.error || data.message || fallbackMessage;
  } else if (error instanceof Error) {
    message = error.message;
  }

          toast.error( message);
  return message;
}
