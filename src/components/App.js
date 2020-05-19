import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

export default class App extends React.Component {
    async onSearchSubmit(term){
       const response= await axios.get('https://api.unsplash.com/search/photos',{
           params: {query:term}, 
           headers: {
            Authorization: 'Client-ID RnHWPZauIIMMwpPbAe0sTkKqbXnaBjUBQK4-07TpO2M'

           } 
        })
        console.log(response.data.results)
    }
  render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
          <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
      );
  }
}
