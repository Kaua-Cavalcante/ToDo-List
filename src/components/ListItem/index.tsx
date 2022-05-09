import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';
import { DeleteIcon } from '../DeleteIcon';

type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    
    return (
        <C.Container done={isChecked}>
            <label>{item.name}
                <input
                    type="checkbox" 
                    checked={isChecked}
                    onChange={e => setIsChecked(e.target.checked)}
                />
                <span className="checkmark"></span>
            </label>

            <C.Area>
                <DeleteIcon />
            </C.Area>
        </C.Container>
    );
}
