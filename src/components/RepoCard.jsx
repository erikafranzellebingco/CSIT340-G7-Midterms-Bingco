function RepoCard(props){
    const [portfolioStars, setPortfolioStars] = useState(0);

    function handleStarPortfolio() {
        setPortfolioStars(portfolioStars + 1);
    }

    return (
        <div className="rounded-xl border-2 border-[#222222] p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">{props.name}</h3>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#222222] px-4 py-1 text-xl"
              onClick={handleStarPortfolio}
            >
              ★ {portfolioStars}
            </button>
          </div>
          <p className="mt-2 text-xl">{props.description}</p>
          <div className="mt-6 flex items-center gap-4 text-lg">
            <span className="rounded-full bg-[#222222] px-4 py-1 text-[#FAF3E1]">
              {props.language}
            </span>
            <span>{props.commits} commits</span>
          </div>
        </div>
    );
}

export default RepoCard;