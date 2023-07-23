
import './App.css'
import Movie from './components/Movie'
import Header from './components/Header'
import movies from './movie.json'
import MyNavbar from './Navbar'
function App() {
  

  return (
    <div className='App'>
      <MyNavbar/>
 <Header/>
 <div className='main'>
  {
   movies.map((element,index)=>{
    return (
    <Movie
    key={index}
    Name={element.name}
    Date={element.date}
    img={element.Poster}
    
    />
    )
   })
  }
 
 </div>
 
    </div>
   
    
  )
}

export default App
