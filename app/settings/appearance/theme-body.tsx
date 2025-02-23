"use client";

import { useTitle } from "~/components/header/header";
import ThemesGroup from "./themes-group";

export default function ThemeBody() {
  useTitle(({ setTitle }) => setTitle)("Appearance");
  return <ThemesGroup />;
}
