import { Injectable } from '@angular/core';
import { Selector, State } from '@ngxs/store';

const initialState = { name: 'World' };

export type AppStateModel = typeof initialState;

@State<AppStateModel>({ name: 'app', defaults: initialState })
@Injectable()
export class AppState {
  @Selector()
  static appName(state: AppStateModel) {
    return state.name;
  }
}
