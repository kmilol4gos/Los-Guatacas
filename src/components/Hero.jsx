import { ArrowDown } from "../../public/Icons";

export function Hero() {
	const localName = "Los Guataca";
	const localDescription = "¡Ven a disfrutar del mejor bajón de Paine!";
	const whatsApp =
		"https://wa.me/56933129358?text=Bienvenido%20a%20Los%20Guatacas%20Sandwicher%C3%ADa.%0AGracias%20por%20elegirnos.%0ADescubre%20nuestro%20men%C3%BA%20de%20s%C3%A1ndwiches%20y%20acompa%C3%B1amientos%20y%20escribe%20tu%20pedido%20aqu%C3%AD%3A%0A%5BEscribe%20tu%20pedido%20aqu%C3%AD%5D%0ATe%20confirmar%C3%A9%20disponibilidad%2C%20precios%20y%20tiempo%20de%20entrega.";
	return (
		<>
			<main class="text-gray-900 flex flex-col gap-10 items-center" id="inicio">
				<header class="flex flex-col gap-5 items-center">
					<h1 class="text-5xl font-bold text-yellow-guataca uppercase text-center">
						{localName}
					</h1>
					<h2 class="text-2xl font-semibold text-neutral-50 text-center drop-shadow-lg">
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
						rel="noopener noreferrer"
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
