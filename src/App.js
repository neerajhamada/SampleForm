import './App.css';
import Submit from './Submit';
import Preview from './Preview';

function App() {
  const data = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
    }
  ];
  return (
    <div className="App">
      {/* <Submit /> */}
      <Preview data={data}/>
    </div>
  );
}

export default App;
