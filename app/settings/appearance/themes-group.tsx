'use client'

import { useTheme } from "next-themes"


import darkImage from "./theme-images/dark-mode.jpg"
import lightImage from "./theme-images/light-mode.jpg"
import system from './theme-images/system.jpg'
import { RadioGroup } from "~/components/ui/radio-group"
import ThemeCard from "./theme-card";

export default function ThemesGroup() {
    return (
        <RadioGroup>
            <ThemeCard image={system} title="System Default" checked />
            <ThemeCard image={lightImage} title="Light" />
            <ThemeCard image={darkImage} title="Dark" />
        </RadioGroup>
    )
}