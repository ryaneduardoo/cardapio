import './App.css'
import { Card } from './components/card/card';
import type { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import { useState } from 'react';
import { CreateModal } from './components/card/create-modal/create-modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <button onClick={handleOpenModal}>novo</button>
      <div className='card-grid'>
        {data?.map(foodData => <Card 
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />
        )}
      </div>
      {isModalOpen && <CreateModal/>}
      
    </div>
  )
}

export default App
