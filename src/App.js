import './App.css';

const animals = [
  {name: 'Cat', image: 'https://headsupfortails.com/cdn/shop/articles/2_large.jpg?v=1648029837', isScary: false},
  {name: 'Dog', image: 'https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg', isScary: false},
  {name: 'Spider', image: 'https://images.ctfassets.net/cnu0m8re1exe/2xdqQSvfebktASbHvILYH5/fcc91130ad1ff329765595b669549d8d/Meet-Jumping-Spider-Adorable-Arachnid.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill', isScary: true},
]

function Animals() {
  const listAnimals = animals.map( animal => 
    <div>
      <img
        src={animal.image}
        alt={animal.name + ' image'}
      />
      <p style={{color: animal.isScary ? 'red' : 'green'}}>{animal.name}</p>
    </div>
  )

  return (
    <div className='animals'>{listAnimals}</div>
  );
}

function PageInfo() {
  return (
    <>
      <h1>This page shows different animals</h1>
      <p>If they are scary, their name will be red, otherwise it is green.</p>
    </>
  )
}

function Header() {
  return (
    <div className='header'>
      <p>MI 449 Lab 10</p>     
      <p>Learning about react</p>     
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PageInfo />
        <Animals />
      </header>
    </div>
  );
}

export default App;
