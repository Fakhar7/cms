import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

import Image, { StaticImageData } from "next/image"
interface ThemeCardProps {
    title: string;
    checked?: boolean;
    image: StaticImageData | string;
    value: "dark" | "light" | "system";
}

export default function ThemeCard({ title, image, checked, value }: ThemeCardProps) {
    return (
            <div className="flex flex-col space-x-2 gap-4">
                <Image src={image} width={160} height={120} alt="dark-mode" className={`rounded-lg ${checked ? "border border-2 border-primary" : ""}`} />
                <div className="flex gap-4">
                    <RadioGroupItem onChange={({}) => console.log("")} value={value} id={value} checked={checked}/>
                    <Label htmlFor={value}>
                        {title}
                    </Label>
                </div>
            </div>

    )
}