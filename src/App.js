import './App.css';
import database from'./data/database.json';

function App() {
  //const movies = [];
  return(
    <div className='App'>
       <h1>NETFLIX</h1>
       {database.map((movies) => {
        return (
          <div>
            <p className='movieCategory'>{movies.category}</p>
            <div> 
            {movies.images.map((urlImages) => {
              return <img src={urlImages} alt=""></img>
            }
            )}
            </div>
          </div>
        )
      })
  }
    </div>
  );
}
export default App;


