
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { categoryReducer, productReducer } from '../../Redux/DataStor';
const DummyJson = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=100')
            .then(res => res.json())
            .then((data) => {
                const category = [...new Set(data.products.map((item) => item.category))]
                dispatch(productReducer(data.products));
                dispatch(categoryReducer(category));
              

            })
    }, [dispatch])
  return (
    <div>
      
    </div>
  )
}

export default DummyJson
