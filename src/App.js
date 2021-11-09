import Todo from './components/Todo';
import Product from './components/Product'
import cardsArr from './data'



function App() {

  return (
    <div>
    <h1> my todos</h1>
      <Todo text='learn react' />
      <Todo text='hwaer react' />
      <Todo text='wrwa react' />
      <Product name='Dr COCO' description='your ai ' price={59.99} />
      <Product name='nespresso' description='coffeeee' price={29.99} />
      <Product name='chuchu' description='your cat' price={39.99} />

      
     
   
  </div>
  );
}

export default App;
//  The <div> tag defines a division or a section in an HTML document
// as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript