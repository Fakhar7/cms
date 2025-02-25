import { Metadata } from "next";
import ThemeBody from "./theme-body";
import { Separator } from "~/components/ui/separator";
import TitleDescription from "~/components/title-description";

export const metadata: Metadata = {
  title: "Appearance",
};

export default function AppearancePage() {
  return (
    <>
      <TitleDescription title="Theme" description="Apply dark or light theme to your cms app." />
      <Separator className="my-10" />
      <ThemeBody />
    </>
  );
}
