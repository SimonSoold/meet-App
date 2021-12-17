import { useSelector, useDispatch } from 'react-redux'
import { RootState } from 'store'
import { actions } from 'features/search'

const HeaderSearch = () => {
    const dispatch = useDispatch()
    const searchText = useSelector((state: RootState) => state.searchString)
    return (
    <>
        <label htmlFor=""
        data-test="header-search-filter"
        >
            Search meetups
            <input type="text" 
            value={searchText}
            onChange={(
                ev: React.ChangeEvent<HTMLInputElement>,
              ) => dispatch( actions.changeSearchString(ev.target.value) )}
            />
        </label>
    </>
    )
}

export default HeaderSearch