import React, {useState} from 'react';
import Layout from './Components/Layout';
import Item from './Components/Item';
import { useLocation } from 'react-router-dom';
import StrippedHoodie from './images/StrippedHoodie.png';
import Dropdown from './Components/dropdown';
import Button from './Components/Button';
import Striped1 from './images/striped1.png'; 
import Striped2 from './images/striped2.png';
import Striped3 from './images/striped3.png';
import Striped4 from './images/striped4.png';

const Product: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState("small");
    const handleSizeSelect = (size: string) => {
        setSelectedSize(size);
    }
    const [images, setImages] = useState({
      img1 : StrippedHoodie,
      img2 : Striped1,
      img3 : Striped2,
      img4 : Striped3,
      img5 : Striped4
    })
    const [ActiveImg, setActiveImage] = useState(images.img1)
    const [count, setCount] = useState(1);
    const decreaseCount = () =>{
      if(count>1){
        setCount(count-1);
      }
    }
    const increaseCount = () => {
      setCount(count+1);
    }
    return(
        <Layout>
        <div className='grid grid-cols-4 gap-1 justify-between'>
        <div className='flex flex-col flex-wrap justify-center'>
            <img src={images.img1} alt='' className='w-16 h-20 my-1' onClick={() => setActiveImage(images.img1)}></img>
            <img src={images.img2} alt='' className='w-16 h-20 my-1' onClick={() => setActiveImage(images.img2)}></img>
            <img src={images.img3} alt='' className='w-16 h-20 my-1' onClick={() => setActiveImage(images.img3)}></img>
            <img src={images.img4} alt='' className='w-16 h-20 my-1' onClick={() => setActiveImage(images.img4)}></img>
            <img src={images.img5} alt='' className='w-16 h-20 my-1' onClick={() => setActiveImage(images.img5)}></img>
           </div>
        <div className='col-span-1 md:col-span-2 flex items-center justify-center'>
        <img src={ActiveImg} alt='Oversized Stripped Hoodie' className="w-67 h-auto mx-auto"></img>
        </div>
          <div className='col-span-1 flex flex-col gap-2 justify-start'>
            <h3 className='text-2xl font-body font-bold'>OVERSIZED STRIPED SWEATER</h3>
            <p className='text-gray-500'>the Oversized Striped Sweater by Pull&Bear, 
              a perfect blend of comfort and style. 
              Crafted with premium quality materials, this sweater offers a relaxed and trendy look. 
              Its oversized design provides ultimate comfort, 
              while the classic striped pattern adds a touch of sophistication </p>
            <div className='flex flex-row gap-16'>
            <h6 className='text-lg font-medium text-center'>EGP 1,490</h6>
            <div>
              <button className='bg-gray-100 py-2 px-4 rounded-lg' onClick={decreaseCount}>-</button>
              <span className='py-4 px-6 rounded-lg'>{count}</span>
              <button className='bg-gray-100 py-2 px-4 rounded-lg' onClick={increaseCount}>+</button>
            </div>
            </div>
            <Dropdown options={["Small", "Medium", "Large"]} onSelect={handleSizeSelect} />
            <Button className="mt-4" text = "ADD TO MY BASKET" color="primary"/>
          </div>
        </div>

        </Layout>
    );
}

export default Product;