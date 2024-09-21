import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export function PopoverNextUI({ children }: { children: ReactNode }) {

    const router = useRouter()

    async function toggleLanguage(language: string) {
        router.replace(language, { scroll: false })
    }

    return (
        <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
                <Button className="bg-transparent px-1.5 min-w-max">{children}</Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 grid gap-2.5 grid-cols-3">
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Português"
                        onClick={() => toggleLanguage("/pt")}
                    />
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Inglês"
                        onClick={() => toggleLanguage("/en")}
                    />
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Espanhol"
                        onClick={() => toggleLanguage("/es")}
                    />
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/FR.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Francês"
                        onClick={() => toggleLanguage("/fr")}
                    />
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Italiano"
                        onClick={() => toggleLanguage("/it")}
                    />
                    <img
                        src="https://purecatamphetamine.github.io/country-flag-icons/3x2/DE.svg"
                        className="h-7 w-h-7 cursor-pointer"
                        alt="Alemão"
                        onClick={() => toggleLanguage("/de")}
                    />
                </div>

            </PopoverContent>
        </Popover>
    );
}