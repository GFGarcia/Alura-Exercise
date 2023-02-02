import React from "react";
import styles from "./PaginaInicial.module.scss";

import Banner from "componentes/Banner";
import Cabecalho from "componentes/Cabecalho";
import Menu from "componentes/Menu";
import Rodape from "componentes/Rodape";
import Galeria from "componentes/Galeria";
import Populares from "componentes/Populares";

export default function PaginaInicial() {
	return (
		<>
			<Cabecalho />
			<main>
				<Menu />
				<section className={styles.principal}>
					<Banner />
					<div className={styles.galeria}>
						<Galeria />
						<Populares />
					</div>
				</section>
			</main>
			<Rodape />
		</>
	);
}
