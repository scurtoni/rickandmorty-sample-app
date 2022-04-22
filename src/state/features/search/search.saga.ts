import api from "../../../utils/api";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SearchActionTypes } from "./../../common.types";

import models from "./../../../models";
import searchSlice from "./search.slice";

/**
 * TODO: I don't know why but any type other than `any` won't work in the takeEvery below.
 *
 * @param action - This action should contain a payload of type {import('models').TravelsParams}
 */
function* updateSearch(action: any) {
  try {
    //const currentResults = (yield select((state: models.ApplicationState) => state.search.result)) as models.SearchResults;
    const page: number = action.payload.page;

    const searchResults: models.CharacterSearchState = yield call(api.characterSearch, page);

    yield put(searchSlice.actions.updateCharacterResults(searchResults));
  } catch (e) {}
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest() {
  yield takeEvery(SearchActionTypes.SEARCH_CHARACTERS, updateSearch);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* searchSagas() {
  yield all([fork(watchFetchRequest)]);
}
