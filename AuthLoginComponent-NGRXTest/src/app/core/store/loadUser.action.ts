import { createAction, props } from '@ngrx/store';
import { UserInterface } from 'src/app/shared/models/user/UserInteface';

export const loadUser = createAction('[Counter Component] carregar Usuario',props<{payload:UserInterface}>());
export const reset = createAction('[Counter Component] Reset Usuario');
