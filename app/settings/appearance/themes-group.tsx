'use client'

import { useTheme } from "next-themes"


import darkImage from "./theme-images/dark-mode.jpg"
import lightImage from "./theme-images/light-mode.jpg"
import system from './theme-images/system.jpg'
import { RadioGroup } from "~/components/ui/radio-group"
import ThemeCard from "./theme-card";

export default function ThemesGroup() {
    const { setTheme, theme } = useTheme();
    return (
        <RadioGroup className="flex gap-4">
            <ThemeCard value="system" image={system} title="System Default" checked={theme === "system"} />
            <ThemeCard value="light" image={lightImage} title="Light" checked={theme === "light"} />
            <ThemeCard value="dark" image={darkImage} title="Dark" checked={theme === "dark"} />
        </RadioGroup>
    )
}