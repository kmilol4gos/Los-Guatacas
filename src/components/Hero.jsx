import { ArrowDown } from "../../public/Icons";

export function Hero() {
	const LocalName = "Los Guatacas";
	const LocalDescription = "¡Ven disfrutar del mejor bajón de Paine!";
	return (
		<>
			<main class="text-neutral-50 flex flex-col gap-10 items-center">
				<header class="flex flex-col gap-5 items-center">
					<h1 class="text-4xl font-bold text-yellow-guataca uppercase text-center">
						{LocalName}
					</h1>
					<h2 class="text-2xl font-semibold text-neutral-50 text-center">
						{LocalDescription}
					</h2>
				</header>

				<footer class="flex items-center justify-center gap-5">
					<a
						href="#contact"
						class="font-semibold text-lg text-yellow-guataca px-6 py-4 border border-yellow-guataca rounded-lg hover:bg-yellow-guataca hover:text-neutral-50 transition "
					>
						<span className="flex gap-3 items-center uppercase">
							Ver Menú
							<ArrowDown />
						</span>
					</a>
					<a
						href="#menu"
						class="font-semibold text-lg text-neutral-50 rounded-lg bg-yellow-guataca transition px-6 py-4 border border-yellow-guataca uppercase"
					>
						Contacto
					</a>
				</footer>
			</main>
		</>
	);
}
