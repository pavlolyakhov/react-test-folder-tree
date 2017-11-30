import React, {Component} from 'react';
import {connect} from 'react-redux';
import Folder from '../components/Folder';
import {fetchItems, updateCurrentView} from '../actions';
import '../main.css';

class StatsView extends Component{
constructor(props){
  super(props);
  this.state = {};
  this.getFolderNames = this.getFolderNames.bind(this);
}

componentWillMount(){
  this.props.fetchItems();
}

componentWillReceiveProps(){
}

handleFolderClick(e){
  const folderName = e.name;
  const path = e.path;
  const pathNameLocation = {folderName, path};
  e.callback(pathNameLocation);
}

getFolderNames(){
  const {currentView} = this.props;
  if(currentView){
    console.log('currentView',currentView);
    //const keyArr = [];
    const resultArr = [];

    let recursiveFunc = function(obj, handleFolderClick, parent, callback){
      const keyArr = Object.keys(obj);
      keyArr.forEach(function(objKey){
        if(typeof obj[objKey] === 'object'){
            const randomKey = Math.random() + objKey;
            if(objKey.includes('.java')){
              resultArr.push(<Folder key={randomKey} path={parent} name={objKey} callback={callback} handleClick={handleFolderClick}>
                <div>{ 'Covered Lines'} - {obj[objKey].coveredLines}</div>
                <div>{ 'Total Lines'} - {obj[objKey].totalLines}</div>
              </Folder>);
            }
            else{
              resultArr.push(<Folder key={randomKey} path={parent} name={objKey} callback={callback} handleClick={handleFolderClick}></Folder>);
            }
            let newPath = parent.concat(objKey);
            recursiveFunc(obj[objKey], handleFolderClick, newPath, callback);
          }
      });
    };
    recursiveFunc(currentView, this.handleFolderClick, [""], this.props.updateCurrentView.bind(this));
    return resultArr;
  }
}
  render(props){
    return(
      <div>
        {this.getFolderNames()}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {currentView : state.stats.currentView}

}
export default connect(mapStateToProps, {fetchItems, updateCurrentView})(StatsView);
