import React from "react";
import styles from "./Rodape.module.scss";

import fbLogo from "./facebook.svg";
import twLogo from "./twitter.svg";
import igLogo from "./instagram.svg";

export default function Rodape() {
	return (
		<footer className={styles.rodape}>
			<div className={styles.rodape__socialmedia}>
				<a href="https://pt-br.facebook.com">
					<img src={fbLogo} alt="Facebook Logo" />
				</a>

				<a
					href="https://twitter.com
"
				>
					<img src={twLogo} alt="Twitter Logo" />
				</a>

				<a
					href="https://www.instagram.com
"
				>
					<img src={igLogo} alt="Instagram Logo" />
				</a>
			</div>

			<p>Desenvolvido por Alura.</p>
		</footer>
	);
}
