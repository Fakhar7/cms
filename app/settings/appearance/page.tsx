"use client"

import { useTitle } from "~/components/header/header"
import ThemesGroup from "./themes-group"

export default function () {
    useTitle(({ setTitle }) => setTitle)("Appearance")
    return <div className="flex items-center justify-center">
        <div className=" w-full max-w-2xl m-auto mt-26 p-2">
            <h1 className="font-bold ">Theme</h1>
            <p className="text-sm text-muted-foreground  mb-12">Apply dark or light theme to your cms app.</p>
            <div className="flex gap-4">
                <ThemesGroup />
            </div>
        </div>
    </div>
}