"use client";

import { useTheme } from "next-themes";

import darkImage from "./theme-images/dark-mode.jpg";
import lightImage from "./theme-images/light-mode.jpg";
import system from "./theme-images/system.jpg";
import { RadioGroup } from "~/components/ui/radio-group";
import dynamic from "next/dynamic";

const ThemeCard = dynamic(() => import("./theme-card"), { ssr: false });

const themes = [
  {
    id: "01",
    value: "system",
    title: "System Default",
    image: system,
  },
  {
    id: "02",
    value: "light",
    title: "Light",
    image: lightImage,
  },
  {
    id: "03",
    value: "dark",
    title: "Dark",
    image: darkImage,
  },
];

export default function ThemesGroup() {
  const { theme } = useTheme();

  return (
    <RadioGroup className="flex gap-4">
      {themes.map((t) => (
        <ThemeCard
          key={t.id}
          value={t.value}
          image={t.image}
          title={t.title}
          checked={theme === t.value}
        />
      ))}
    </RadioGroup>
  );
}
