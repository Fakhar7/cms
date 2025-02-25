import React from "react";

interface Props {
  title: string | React.ReactNode;
  description?: string;
}

export default function TitleDescription({ title, description }: Props) {
  return (
    <div>
      {typeof title === "string" ? (
        <h1 className="font-bold">{title}</h1>
      ) : (
        title
      )}
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
