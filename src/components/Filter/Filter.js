import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../../redux/actions';

import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className={s.screenBodyItem}>
      <label className={s.appFormGroup}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={e => dispatch(filterContact(e.currentTarget.value))}
          className={s.appFormControl}
        />
      </label>
    </div>
  );
}

export default Filter;
