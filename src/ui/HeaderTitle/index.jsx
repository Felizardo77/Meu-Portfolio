import "./HeaderTitle.css";

const HeaderTitle = () => {
  return (
    <svg
      width="614" // Aumente se necessário para o título longo
      height="390"
      viewBox="0 0 614 390" // Ajuste conforme o novo tamanho
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="header__title"
    >
      <g id="text">
        {/* Substitua por todos os paths de "Criando Experiências Digitais – UI/UX, Desenvolvimento Web & Software" */}
        <path d="INSIRA_OS_PATHS_DO_TITULO_AQUI" fill="#F9F9F9" />
      </g>

      <g id="cursor">
        <path
          d="M453.383 343L448 317L471 331L459.745 333.5L453.383 343Z"
          fill="#373737"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M587 358C587 349.716 580.284 343 572 343H484.932C476.648 343 469.932 349.716 469.932 358V361C469.932 369.284 476.648 376 484.932 376H572C580.284 376 587 369.284 587 361V358Z"
          fill="#2563EB"
        />
        {/* Substitua por todos os paths de "Felizardo Muchanga" */}
        <path d="INSIRA_OS_PATHS_DO_NOME_AQUI" fill="white" />
      </g>
    </svg>
  );
};

export default HeaderTitle;
