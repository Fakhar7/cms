import { Metadata } from "next";
import ThemeBody from "./theme-body";

export const metadata: Metadata = {
  title: "Appearance",
};

function PageDetails() {
  return (
    <div className="mb-4">
      <h1 className="font-bold ">Theme</h1>
      <p className="text-sm text-muted-foreground">
        Apply dark or light theme to your cms app.
      </p>
    </div>
  );
}

export default function AppearancePage() {
  return (
    <div className="flex items-center justify-center">
      <div className=" w-full max-w-2xl m-auto mt-26 p-2">
        <PageDetails />
        <ThemeBody />
      </div>
    </div>
  );
}
