import React from 'react';

//import dependencies
//SearchInput component for searchbar and filters etc
import SearchInput from './input';
//RecentSearches component to render recent searches panel
import RecentSearches from './recent';
//SearchResults component to render search results panel
import SearchResults from './results';
//ResultItem component to render individual search results
import ResultItem from './results/result-item';
//NoResults to render when no results are found
import NoResults from './results/no-results';

//import fetch polyfill - used to make requests to service
//https://www.npmjs.com/package/whatwg-fetch
import 'whatwg-fetch';

//import promise polyill to allow fetch to work in older browsers
import Promise from 'babel-polyfill'

//import styles
import './search.less';

//The Search class contains all of functionality that manages
//the state of the app and re-renders components as required
class Search extends React.Component {

  constructor(props){
    //pass props to super incase any props are passed to
    //class in future
    super(props);

    //property for storying current value of input box;
    this.searchInput = "";

    //component state
    this.state = {
      //store latest set of results for storing latest data from server
      //initialise as undefined
      results: undefined,
      recent: []
    }
  }

  //handle onchange event on searchbar input box
  handleOnInputChange(e){

    //set property on this Search class to the current input value
    this.searchInput = e.target.value
  }

  //method called to search the latest input
  doSearch(){
   //store search string at point of search to use a query param
   //and to ensure value stored in recent matches
    const searchString = this.searchInput;
    //get request to search api provided by Dare with name parameter and current input value appended
    fetch(`http://darewestapi.azurewebsites.net/api/staff/search?name=${searchString}`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    })
    //convert response from json to js
    .then((response) => response.json())
    //one response is complete,
    //set the results property on the state to the new data received
    //add the recent search to the list of recent searches
    //this will cause component to re-render
    .then((json) => {

      //if the search wasnt empty, add it to the list
      if(searchString !== "" && this.state.recent.indexOf(searchString) === -1) {

        //add new search string to list of recent searches
        let recentSearches = [searchString, ...this.state.recent];

        //ensure recent search list is only event
        if(recentSearches.length === 6) recentSearches.pop();

        this.setState({
          results: json,
          recent: recentSearches
        })

      }
      //otherwise just render results
      else {

        this.setState({
          results: json
        });

      }

    })

  }

  //once the component has mounted
  componentDidMount(){
    //do the search with the inital input value
    this.doSearch();
  }

  //method used to map results returned from search service
  //into list component to be used for rendering
  //takes an ARRAY of RESULTS as parameter
  mapResultsToOutput(results){
    return (
      //create ul, containing a new, mapped array for each li element
      //inclide a ResultItem component in each
      //and pass the data required to render
      <ul className="results-list">
        {
          results.map((result, i) =>
          <li key={i}>
            <ResultItem
              name={result.name.replace(/\b(\w)/g, a => a.toUpperCase())}  //Noticed one instance of improper case, so make first letter of each word uppercase
              avatar={result.picture}
              role={" — " + result.jobTitle}
            />
          </li>
          )
        }
      </ul>
    )
  }

  render() {

    //let results be the current results property of the state
    let results =  this.state.results;

    //if it is undefined or there are 0 results, render the NoResults component
    if(results === undefined || results.length === 0)
      results = <NoResults/>
    else
    //otherwise the results data into renderable output
      results = this.mapResultsToOutput(this.state.results);

    //render all search components
    return (
      <article id='search'>
        <SearchInput
          className="search-section"
          onClickSearch={this.doSearch.bind(this)} //pass down doSearch for button click
          onInputChange={this.handleOnInputChange.bind(this)} //pass down handleOnInputChange for onchange event on input box
          onReturnPress={
            (e)=> {
              if(e && e.which === 13) this.doSearch.call(this); //handler for if return key is press on input box, doSearch if so
            }
          }
        />
        <div className="search-results-recent-wrapper">
          <RecentSearches
            className="search-section inline"
            onClickRecentItem={
              (string) => {
                //update searchInput to recent search item
                this.searchInput = string;
                //and search it again
                this.doSearch();
              }
            }
          //pass down list of recent searches as children to presentational component
          >
            {this.state.recent}
          </RecentSearches>
          <SearchResults className="search-section inline">
            {results}
          </SearchResults>
        </div>
      </article>
    )
  }
}

export default Search;
