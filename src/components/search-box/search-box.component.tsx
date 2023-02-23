import { ChangeEvent, EventHandler } from 'react';
import './search-box.styles.css';

type searchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}
const SearchBox = ({ className, placeholder, onChangeHandler }: searchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
