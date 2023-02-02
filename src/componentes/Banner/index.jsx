import React from "react";
import styles from "./Banner.module.scss";
import BannerImagem from "./banner.png";

export default function Banner() {
	return (
		<div className={styles.banner}>
			<h1>A galeria mais completa de fotos do espaço!</h1>
			<img src={BannerImagem} alt="A imagem da terra vista do espaço" />
		</div>
	);
}
