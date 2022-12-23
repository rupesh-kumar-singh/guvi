import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <Welcome name="rupesh kumar singh" src='https://images.unsplash.com/photo-1671584643473-891afcd941d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60'/>
  <Welcome  name="aman singh" src='https://images.unsplash.com/photo-1671693376925-0396923c23bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/>
  <Welcome  name="babu singh" src="https://images.unsplash.com/photo-1671642762254-4e6cbc5edbbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60"/>
      
    </div>
  );
}





const Welcome = (ptops) => {
  const{src,name}=ptops
  return (
    <div>
    <h3> {name}</h3>
    <img src={src} alt ="hii " style={{height:"200px", width:"200px" ,borderradius:"50%"}}/>
    </div>
  );
};


export default App;
