"use client"

import { create } from 'zustand';

interface TitleStore {
    title: string;
    setTitle: (title: string) => void;
}

export const useTitle = create<TitleStore>((set) => ({
    title: '',
    setTitle: (title: string) => set({ title }),
}));

export default function Header() {
    const title = useTitle((state) => state.title);
    return (
        <div className="sticky right-0 left-0 top-0 h-12 border-b w-full bg-sidebar flex items-center p-4 gap-2 font-semibold">
            {title}
        </div>
    )
}