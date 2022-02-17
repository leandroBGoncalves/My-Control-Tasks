import { supabase } from '../../services/supaBaseClient';

export async function innerData( checked, newTask ) {
    const { data, error } = await supabase
    .from('tascks_control').insert([
        {
            checked: checked,
            tasck: newTask,
        }
    ])
    if (error) {
        window.alert(`${error}`)
    } else {
        console.log(data)
    }
}
