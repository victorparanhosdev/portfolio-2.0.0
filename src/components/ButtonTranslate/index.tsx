import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import { useTransition } from "react";
import { useRouter, routing, Locale } from "@/i18n/routing";
import { useParams } from 'next/navigation';
import { Translate } from "@phosphor-icons/react/dist/ssr";





export function ButtonTranslate() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const params = useParams();

    async function onSelectChange(language: string) {
        startTransition(() => {
            router.replace(language, { locale: language as Locale, scroll: false });
        });
    }
    const renderFlag = (locale: string) => {
        return (
            <img
                key={locale}
                src={`/country/${locale}.svg`}
                className={`h-7 min-w-7 cursor-pointer p-0.5 ${locale === params.locale ? 'border dark:border-gray-dark-450 border-blue-light-200' : ''}`}
                alt={`Flag of ${locale}`}
                onClick={() => onSelectChange(locale)}
                aria-label={`Switch to ${locale}`}
            />
        );
    };

    return (
        <Popover placement="bottom" showArrow={true} isTriggerDisabled={isPending}>
            <PopoverTrigger>
                <Button className="bg-transparent px-1.5 min-w-max disabled:text-opacity-60" disabled={isPending}>
                    <Translate size={32} />
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <div className="px-1 py-2 grid gap-1.5 grid-cols-3">
                    {routing.locales.map(renderFlag)}
                </div>
            </PopoverContent>
        </Popover>
    );
}
