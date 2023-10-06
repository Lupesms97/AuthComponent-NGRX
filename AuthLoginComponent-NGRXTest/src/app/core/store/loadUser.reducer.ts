import { createReducer, on } from '@ngrx/store';
import {  loadUser, reset } from './loadUser.action';
import { UserInterface } from 'src/app/shared/models/user/UserInteface';
import { Role } from 'src/app/shared/models/user/Role';


export const initialState:UserInterface = {
    token: '',
    role: Role.UNDEFINED_ROLE,
    userName: ''
}

export const userState = createReducer(
  initialState,
  on(loadUser, (state, { payload }) => {
    state = {
      ...state,
      token: payload.token,
      userName: payload.userName,
      role: payload.role
    };
    return state;
  }),
  on(reset, (state) => {
    state = {
      ...state,
      userName: '',
      token: '',
      role: Role.UNDEFINED_ROLE
    };
    return state;
  })
);