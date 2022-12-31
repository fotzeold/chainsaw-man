import './search.scss';

const SearchField = (props) => {
	const { searchedChar, actSearchField } = props;

	return (
		<div className="searched-content">
			{searchedChar.length > 0 ?
				searchedChar.map((e, i) => {
					return (
						<div className="hero" key={i + '00'}>
							<div className="hero__image">
								<img src={e.thumbnail} alt="" />
							</div>
							<span>{e.name}</span>
						</div>
					)
				})
				: null}
			{(actSearchField && searchedChar.length === 0) ? <h4>Such a hero does not exist</h4> : null}
		</div>
	)
}

export default SearchField;