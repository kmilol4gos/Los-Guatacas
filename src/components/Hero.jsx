import { ArrowDown } from "../../public/Icons";

export function Hero() {
    const localName = "Los Guataca";
    const localDescription = "¡Ven a disfrutar del mejor bajón de Paine!";
    const whatsApp = "";
    return (
        <>
            <main class="text-gray-900 flex flex-col gap-10 items-center" id="inicio">
                <header class="flex flex-col gap-5 items-center">
                    <h1 class="text-4xl font-bold text-yellow-guataca uppercase text-center">
                        {localName}
                    </h1>
                    <h2 class="text-2xl font-semibold text-neutral-50 text-center">
                        {localDescription}
                    </h2>
                </header>

                <footer class="flex items-center justify-center gap-5">
                    <a
                        href="#menu"
                        class="font-semibold text-lg bg-gray-900 text-yellow-guataca px-6 py-4 border border-yellow-guataca rounded-lg hover:bg-yellow-guataca hover:text-neutral-50 transition "
                    >
                        <span className="flex gap-3 items-center uppercase">
                            Ver Menú
                            <ArrowDown />
                        </span>
                    </a>
                    <a
                        href={whatsApp}
                        target="_blank"
                        class="underline font-semibold text-lg rounded-lg bg-yellow-guataca transition px-6 py-4 border border-yellow-guataca uppercase"
                    >
                        ¡Pide Aquí!
                    </a>
                </footer>
            </main>
        </>
    );
}
