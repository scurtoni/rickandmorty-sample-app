import api from "../../../utils/api";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { SearchActionTypes, DetailsActionTypes } from "./../../common.types";

import models from "./../../../models";
import searchSlice from "./search.slice";

const LOCATION_BASEURL = "https://rickandmortyapi.com/api/location/";
const EPISODE_BASEURL = "https://rickandmortyapi.com/api/episode/";

/**
 * @param action - This action should contain a payload of type {import('models').TravelsParams}
 */
function* updateSearch(action: any) {
  try {
    const page: number = action.payload.page;

    const searchResults: models.CharacterSearchState = yield call(api.characterSearch, page);

    yield put(searchSlice.actions.updateCharacterResults(searchResults));
  } catch (e) {}
}

function* updateDetails(action: any) {
  try {
    const character: models.Character = action.payload.character;

    const locationId = character.location.url?.replace(LOCATION_BASEURL, "");

    const epdisodesId = character.episode.reduce((result, episodeUrl: string) => {
      return result + "," + episodeUrl.replace(EPISODE_BASEURL, "");
    }, "");

    const location: models.Location = yield call(api.locationSearch, locationId);

    const episodes: models.Episode[] = yield call(api.episodeSearch, epdisodesId);

    yield put(
      searchSlice.actions.updateDetails({
        episodes,
        location,
        id: character.id
      })
    );
  } catch (e) {}
}

/**
 * @desc Watches every specified action and runs effect method and passes action args to it
 */
function* watchFetchRequest() {
  yield takeEvery(SearchActionTypes.SEARCH_CHARACTERS, updateSearch);
  yield takeEvery(DetailsActionTypes.GET_CHARACTER_DETAILS, updateDetails);
}

/**
 * @desc saga init, forks in effects, other sagas
 */
export default function* searchSagas() {
  yield all([fork(watchFetchRequest)]);
}
