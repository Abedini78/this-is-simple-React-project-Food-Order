
import { useContext } from 'react';
import './App.css';
import { Container } from './Container/Container';
import { ContainerOrderFoods } from './ContainerOrderFoods/ContainerOrderFoods';
import { ContainerSvgFoods } from './ContainerSvgFoods/ContainerSvgFoods';
import { Context } from './Context/Context';
import { Discribtion } from './Discribtion/Discribtion';
import { Header } from './Header/Header';
import { UserBasked } from './UserBasked/UserBasked';

function App() {
  const ctx=useContext(Context)
  return (
    <>
    {ctx.FlageModal && <UserBasked></UserBasked>}
    
   <Header></Header>

   <ContainerSvgFoods></ContainerSvgFoods>

   <Container>

     <Discribtion></Discribtion>
     
     <ContainerOrderFoods></ContainerOrderFoods>
   </Container>
    </>
   
  );
}

export default App;
