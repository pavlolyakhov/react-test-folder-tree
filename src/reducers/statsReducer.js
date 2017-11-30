import _ from 'lodash';
import qs from 'qs';
import {FETCH_ITEMS, UPDATE_VIEW} from '../actions';


// helper function to transform array of received objects into one object with folder structure
function formatSourceData(sourceData){
  let resultObj = {};
  _.mapKeys(sourceData, (value, key, object) => {
      const keyArr = key.split("/");
      const javaFileName = keyArr[keyArr.length - 1];

      let javaFileStatsValues = { [javaFileName]: value };  //deepest folder name .java file

      let next;
      for (let i = keyArr.length; i > 1; i--) {
          const nextKey = keyArr[i - 2];
          next = { [nextKey]: javaFileStatsValues };
          var deep = _.cloneDeep(next);
          javaFileStatsValues = deep;
      }
      resultObj = _.merge(resultObj, javaFileStatsValues);
  });
  return resultObj;
}

const defaultState ={currentView : {}};
const statsReducer = function(state = defaultState, action){
  let rootView = {};
  switch(action.type){
    case FETCH_ITEMS:
      const sourceData = qs.parse(action.payload.data);
      const convertedData = formatSourceData(sourceData);
      _.mapKeys(convertedData[""], (value, key)=>{
          rootView = {...rootView, [key]:{} };
      });
      const newState = {...state, source : convertedData, currentView : rootView};
      return newState;
    case UPDATE_VIEW:
    //action.payload is {folderName, pathArray}
      const path = action.payload.path;
      let currentPathValue = {...state.source};

      path.forEach(function(parentFolder){
        currentPathValue = currentPathValue[parentFolder] ;
      });

      const folderNameClicked = action.payload.folderName;
      const valObj = currentPathValue[folderNameClicked];
      const valObjKeys = Object.keys(valObj);
      let newViewObj = {};

      if(folderNameClicked.includes('.java')){  //when java file clicked is found, get stats
        newViewObj = {...valObj};
      }
      else{
        valObjKeys.forEach(function(key){
          if(key.includes('.java')){  //if java filename is found, get stats
            newViewObj = {...valObj};
          }else{
            newViewObj = {...newViewObj, [key]:{} } // browse through folder
          }
        });
      }

      path.splice(0,1); //remove initial root ""
      const currentViewClone =_.cloneDeep(state.currentView);

      let currentViewPathValue = _.cloneDeep(state.currentView);;
      if(path.length === 0 ){
          currentViewClone[action.payload.folderName] = newViewObj;
      }
      else{
        currentViewPathValue = currentViewClone;
        path.forEach(function(parentFolder){
          currentViewPathValue = currentViewPathValue[parentFolder];
        });
        currentViewPathValue[action.payload.folderName] = newViewObj;
      }

      const updatedCurrentViewState = {...state, currentView : currentViewClone};
      console.log('updatedCurrentViewState new State',updatedCurrentViewState);
      return updatedCurrentViewState;
    default:
      return {...state};
  }
}

export default statsReducer;
