import { useState } from 'react';
import reactLogo from '@assets/react.svg';
import viteLogo from '/vite.svg';
import './index.scss';
import { useNavigate} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import { add , remove} from '../../store/features/carSlice'
import { rootState } from '../../store/index';

function App() {
  const [count, setCount] = useState(0);
  const navgiate = useNavigate()

  const car = useSelector((state: rootState) => state.car);
  const carItem = car.map((item,index) => (<div style={{lineHeight: '20px'}} key={index}>{item.name}</div>))
  console.log(car,carItem)

  const dispatch = useDispatch();
  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
      </div>

      <h1> React-redux数据</h1>
      <div className='card'>
        <button onClick={()=>dispatch(add({name: '姓名' + count}))}>+</button>-----------<button onClick={()=>dispatch(remove())}>-</button>
       <div style={{color:'red'}}>
          {carItem}
       </div>
      </div>

      <div className='jump'>
        <button onClick={() => navgiate('/about')}>跳转到about</button>
      </div>
    </>
  );
}

export default App;
