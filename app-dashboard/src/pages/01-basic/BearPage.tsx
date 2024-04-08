import { useShallow } from 'zustand/react/shallow';
import { WhiteCard } from '../../components';
import useBearStore from '../../stores/bears/bears.store';

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears/>
        <PolarBears/>
        <PandaBears/>
        <BearDispley/>
      </div>
    </>
  );
};

export const BlackBears = () => {
  const blackBears = useBearStore(state => state.blackBears)
  const increaseBlackBear = useBearStore(state => state.increaseBlackBear)
  return (
    <WhiteCard centered >
      <h2>Osos Negros</h2>
      <br />
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10">{blackBears}</span>
        <button onClick={() => increaseBlackBear(-1)}>-1</button>
      </div>
    </WhiteCard >
  )
}

export const PolarBears = () => {
  const polarBears = useBearStore(state => state.polarBears)
  const increasePolarBear = useBearStore(state => state.increasePolarBear)
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>
      <br />
      <div className="flex flex-col md:flex-row">
        <button onClick={() => increasePolarBear(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {polarBears} </span>
        <button onClick={() => increasePolarBear(-1)}>-1</button>
      </div>
    </WhiteCard>
  )
}

export const PandaBears = () => {
  const pandaBears = useBearStore(state => state.pandaBears)
  const increasePandaBear = useBearStore(state => state.increasePandaBear)
  return (
    <WhiteCard centered>
    <h2>Osos Pandas</h2>
    <br />
    <div className="flex flex-col md:flex-row">
      <button onClick={ () => increasePandaBear(+1)}> +1</button>
      <span className="text-3xl mx-2 lg:mx-10"> { pandaBears }</span>
      <button onClick={ () => increasePandaBear(-1)}>-1</button>
    </div>
  </WhiteCard>
  )
}

export const BearDispley = () => {

  const bears  = useBearStore(useShallow(state => state.bears))

  const addBear = useBearStore(state => state.addBear)
  const clearBear = useBearStore(state => state.clearBear)

  return(

    <WhiteCard>
      <button className='mt-2' onClick={ () => addBear()}>Agregar Oso</button>
      <button className='mt-2 ml-4 mb-6' onClick={ () => clearBear()}>Eliminar Osos</button>
     <pre>
      {
        JSON.stringify(bears, null, 2)
      }
     </pre>
    </WhiteCard>

  )
}