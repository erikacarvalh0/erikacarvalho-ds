import "./raw/index.scss";

	const Header = () => {
		return <header data-component="" className="header">
			<a href="https://erikacarvalho.dev">
				<img className="header__image" src="images/icons/logo.svg" />
			</a>
		
			<nav className="header__nav">
				<div className="header__nav-icon">
					<img data-js="menubtn" className="header__image" src="images/icons/menu.svg" />
				
					<div className="header__hamburguer"></div>
				</div>
		
				<ul data-js="menu" className="header__menu">
					<button data-js="closeMenu" className="header__menu-button">
						+icon 'menu'
					</button>
					<li className="header__menu-item">
						<a className="header__menu-link" href="https://erikacarvalho.dev"> Home</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="https://erikacarvalho.dev/about"> Sobre</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="https://erikacarvalh0.github.io/badges-display/"> Painel de Conquistas</a>
					</li>
					<li className="header__menu-item">
						<a className="header__menu-link" href="https://github.com/erikacarvalh0/cv-generator-cli"> CV Generator CLI</a>
					</li>
					<button className="header__info" data-js="showInfo"> 
						<span>
							<i></i>
							About this project 
						</span> 
					</button>
				</ul>
		
				<dialog data-js="infoModal" className="modal__info">
					<button className="modal__close" data-js="hideInfo"> X</button>
					<header className="modal__header">
						<h2 className="modal__title"> About this project</h2>
					</header>
		
					<section className="modal__body">
						<p className="modal__text">
							<strong>Objetivo técnico:</strong>
							Treinar manipulação de SVG com animações CSS.
						
						</p><p className="modal__text">
							<strong>Stack utilizada:</strong>
							Pug/Jade, Stylus, JS vanilla
						
						</p><p className="modal__text">
							<strong>Tempo para desenvolvimento v1:</strong>
							Aproximadamente 18h
						
						</p><p className="modal__text">
							<strong>Repositório:</strong>
							<a href="https://github.com/erikacarvalh0/badges-display" target="_blank"> Github</a>
					</p></section>	
				</dialog>
		</nav></header>;
	};

	export default Header;