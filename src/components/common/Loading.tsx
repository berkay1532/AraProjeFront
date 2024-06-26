import React from "react";

export const LoadingPage = () => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-primary rounded-full animate-bounce"></div>
    </div>
  );
};
