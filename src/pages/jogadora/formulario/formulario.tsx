import { Link } from "react-router-dom"

import iconFormulario from "../../../assets/formulario.png"
import evento from "../../../assets/calendario.png"
import bannerFormulario from "../../../assets/bannerFormulario.png"

function Formulario() {
	return (
		<section className="flex justify-center font-inter items-start gap-8 px-10 py-5 branco-bg">
			<div className="flex flex-col gap-6">
				<div className="branco-bg rounded-2xl w-full max-w-md shadow-2xl">
					<img className="rounded-t-2xl" src={bannerFormulario} alt="Imagem da árbitra brasileira Edina Alves Batista segurando uma bola de futebol" />

					<div className="flex flex-col p-6 justify-center items-center">
						<img className="max-w-12" src={iconFormulario} alt="ícone ilustrativo de formulário" />
						<h1 className="text-center text-3xl font-bebas-neue mb-1"> Formulário da jogadora: </h1>
						<h2 className="text-center text-md mb-6">Jogadora, desejamos que <span className="bg-rose-200 px-3 rounded-full">você sempre cresça</span> no mundo do futebol! Para isso, precisamos que você nos informe algumas informações mais específicas, para que possamos contar com você e ter confiança que você vai ser uma <span className="bg-rose-200 px-3 rounded-full">jogadora responsa!</span></h2>
					</div>
				</div>

				<div className="branco-bg rounded-2xl w-full max-w-md shadow-2xl">
					<div className="flex flex-col p-6 justify-center items-center">
						<img className="max-w-12" src={evento} alt="ícone ilustrativo de evento" />
						<h1 className="text-center text-3xl font-bebas-neue mb-1"> Participe de eventos </h1>
						<h2 className="text-center text-md mb-6">Preenchendo esse formulário, você vai ter <span className="bg-rose-200 px-3 rounded-full">acesso direto</span> a inscrições de nossos eventos, peneiras, campeonatos e muito mais!</h2>
					</div>
				</div>

			</div>
			<div className="rosa-bg rounded-2xl w-full max-w-xl shadow-2xl p-6">
				<form className="space-y-4">
					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">1. Posição favorita em campo:</label>
						<div className="flex flex-wrap justify-center md:justify-start gap-2">
							{["Goleira", "Zagueira", "Lateral", "Volante", "Meia", "Atacante"].map(
								(posicao) => (
									<label key={posicao} className="cursor-pointer">
										<input
											type="radio"
											name="posicao"
											value={posicao.toLowerCase()}
											className="hidden peer"
										/>
										<span className="block py-1 px-3 rounded-xl branco-bg shadow-sm hover:shadow-md hover:scale-105 hover: transition-all duration-200 ease-in-out preto font-medium peer-checked:bg-purple-700 peer-checked:text-white">
											{posicao}
										</span>
									</label>
								)
							)}
						</div>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">2. Pé Dominante:</label>
						<div className="flex flex-wrap justify-center md:justify-start gap-2">
							{["Direito", "Esquerdo", "Ambos"].map((pe) => (
								<label key={pe} className="cursor-pointer">
									<input
										type="radio"
										name="pe-dominante"
										value={pe.toLowerCase()}
										className="hidden peer"
									/>
									<span className="block py-1 px-3 rounded-xl branco-bg shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 ease-in-out preto font-medium peer-checked:bg-purple-700 peer-checked:text-white">{pe}</span>
								</label>
							)
							)}
						</div>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">3. Condição física atual:</label>
						<div className="relative flex items-center w-full">
							<div className="absolute top-1/2 left-0 w-full h-2 roxo-bg rounded-full transform -translate-y-1/2"></div>

							{[
								{ label: "Em treinamento regular", value: "treinamento" },
								{ label: "Inativa, pretendo voltar", value: "inativa" },
								{ label: "Em recuperação de lesão", value: "recuperacao" },
							].map((option, index) => (
								<label key={option.value} className="relative flex-1 text-center cursor-pointer">
									<input
										type="radio"
										name="condicao"
										value={option.value}
										className="absolute opacity-0 w-full h-full peer"
									/>
									<div className="w-4 h-4 mx-auto rounded-full border-2 border-gray-400 bg-white peer-checked:bg-purple-700 peer-checked:border-purple-700 transition-all"></div>
									<span className="block mt-5 text-base md:text-sm">{option.label}</span>
								</label>
							))}
						</div>
					</div>

					{/* 4. Experiência esportiva */}
					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">4. Clubes/Times anteriores (com nome e ano):</label>
						<input
							type="text"
							name="clubes"
							className="w-full p-2 rounded-md border border-gray-300 preto"
							placeholder="Base sub-12 do Santos: 06/2022 - 07/2023, Flamengo..."
						/>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">5. Competições que já disputou:</label>
						<input
							type="text"
							name="competicoes"
							className="w-full p-2 rounded-md border border-gray-300 preto"
							placeholder="Taça das favelas 2022, interclasse escolar..."
						/>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">6. Premiações:</label>
						<input
							type="text"
							name="premiacoes"
							className="w-full p-2 rounded-md border border-gray-300 preto"
							placeholder="Copinha regional, medalha de prata..."
						/>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">7. Por que você quer se tornar jogadora profissional?</label>
						<input
							type="text"
							name="motivo"
							className="w-full p-2 rounded-md border border-gray-300 preto"
							placeholder="Gostaria de me tornar jogadora pois..."
						/>
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">8. Objetivos atuais como atleta:</label>
						{[
							"Participar de peneiras",
							"Entrar em um clube profissional",
							"Ser convocada para seleções regionais/estaduais",
							"Outra: "
						].map((objetivo, idx) => (
							<label key={idx} className="flex items-center gap-2 my-1 cursor-pointer">
								<input type="checkbox" name={`objetivo-${idx}`} className="w-4 h-4" />
								<span className="preto">{objetivo}</span>
								{objetivo.includes("Outra") && (
									<input type="text" name="objetivo-outra" className="ml-2 p-1 rounded-md border border-gray-300" />
								)}
							</label>
						))}
					</div>

					<div className="w-full py-2">
						<label className="block mb-1 text-base font-medium">9. Está disponível para viajar para jogar?</label>
						{[
							"Sim",
							"Sim, com autorização dos pais",
							"Não"
						].map((opcao, idx) => (
							<label key={idx} className="flex items-center gap-2 my-1 cursor-pointer">
								<input type="radio" name="disponibilidade" className="w-4 h-4" />
								<span className="preto">{opcao}</span>
							</label>
						))}
					</div>


					<label htmlFor="termo" className="block mb-1 text-base font-medium"> Termo de responsabilidade: </label>
					<div className="bg-white p-3 rounded-md text-base text-gray-700 max-h-32 overflow-y-auto border">
						<p>
							Ao compartilhar seus dados, você declara estar ciente de que:
						</p>
						<ul className="list-disc pl-5 mt-2 space-y-1">
							<li>É responsável pelas informações fornecidas.</li>
							<li>Se compromete a utilizar a plataforma de forma ética.</li>
							<li>Autoriza o uso dos dados conforme a política de privacidade.</li>
						</ul>
						<p className="mt-2 font-semibold">
							Você deve aceitar este termo para prosseguir.
						</p>
					</div>


					<div className="flex items-center gap-2">
						<input
							type="checkbox"
							id="termo"
							className="w-4 h-4"
							required
						/>
						<label htmlFor="termo" className=" text-base">
							Li e aceito o termo de responsabilidade
						</label>
					</div>

{/* mudar dps rota para o portal da jogadora */}
					<Link to="/">
						<button type="submit" className="w-full text-2xl bg-[var(--cor-9)]  font-bebas-neue font-bold uppercase rounded-full py-2 hover:bg-purple-700 transition"> Concluído</button>
					</Link>
				</form>

			</div>
		</section>
	)
}

export default Formulario