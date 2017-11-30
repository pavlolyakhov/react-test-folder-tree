import axios from 'axios';

export const FETCH_ITEMS = "fetch_items";
export const UPDATE_VIEW = "update_view";
const ROOT_URL = "http://localhost:8000";

export function fetchItems(){ //fetch all items
  const request = axios.get(`${ROOT_URL}/getCoverage`);
  return {
      type: FETCH_ITEMS,
      payload: request
    };
};

export function updateCurrentView(pathNameLocation){
//{folderName, path}

  return{
    type: UPDATE_VIEW,
    payload: pathNameLocation
  }
}
