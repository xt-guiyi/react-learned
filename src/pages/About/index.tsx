import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/features/counterSlice'
import { rootState } from '../../store/index';

export default function About() {
  const [name, setName] = useState('熊涛');
  // 获取redux数据
  const count = useSelector((state : rootState) => state.counter.value)
  const dispatch = useDispatch()
  
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      setName('未知');
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <div style={{color: 'skyblue'}}>关于我-{name}</div>
      <button onClick={() => dispatch(increment())}>+</button><span style={{color: 'skyblue'}}>react-redux数据--{count}</span><button onClick={() => dispatch(decrement())}>-</button>
      <div className='jump'>
        <button onClick={() => navigate('/home')}>跳转到home</button>
      </div>
    </>
  );
}
