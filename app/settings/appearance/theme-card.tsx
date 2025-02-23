import { Label } from "~/components/ui/label"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"

import Image, { StaticImageData } from "next/image"
interface ThemeCardProps {
    title: string;
    image: StaticImageData | string;
    checked: boolean
}

export default function ThemeCard({ title, image, checked }: ThemeCardProps) {
    return (
            <div className="flex flex-col space-x-2 gap-4">
                <Image src={image} width={160} height={120} alt="dark-mode" className={`rounded-lg ${checked ? "border border-2 border-primary" : ""}`} />
                <div className="flex gap-4">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">
                        {title}
                    </Label>
                </div>
            </div>

    )
}