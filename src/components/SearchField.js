import { AutoComplete } from 'antd'

const SearchField = ({ onSearch, onSelect, options }) => (
  <AutoComplete
    className="search-field"
    placeholder="Start typing a movie title"
    onSearch={ onSearch }
    onSelect={ onSelect }
    options={ options }
    maxLength={ 85 }
  />
)

export default SearchField