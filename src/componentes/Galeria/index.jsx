import React from "react";
import { useState } from "react";
import styles from "./Galeria.module.scss";
import fotos from "./fotos.json";

import Tags from "../Tags";
// Span para expandir e favoritar a imagem
import Cards from "./Cards";

export default function Galeria() {
	const [itens, setItens] = useState(fotos);
	// Percorre cada tag do fotos.json e com o new Set insere os valores únicos na array com [...new Set()]
	const tags = [...new Set(fotos.map((valor) => valor.tag))];

	const filtraFotos = (tag) => {
		const novasFotos = fotos.filter((foto) => {
			return foto.tag === tag;
		});

		setItens(novasFotos);
	};

	return (
		<section className={styles.galeria}>
			<h2>Navegue pela galeria</h2>
			<Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
			<Cards itens={itens} styles={styles} />
		</section>
	);
}
