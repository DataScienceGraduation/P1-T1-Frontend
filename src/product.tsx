import React, {useState} from 'react';
import Layout from './Components/Layout';
import Section from './Components/Section';
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
        <Section>
        <div className='grid justify-between gap-12 md:grid-cols-6'>
        <div className='flex flex-row flex-wrap justify-center order-2 md:space-y-1 md:flex-col md:order-1'>
            <img src={images.img1} alt='' className='w-16 h-20 mx-1 md:mr-0 md:ml-auto' onClick={() => setActiveImage(images.img1)}></img>
            <img src={images.img2} alt='' className='w-16 h-20 mx-1 md:mr-0 md:ml-auto' onClick={() => setActiveImage(images.img2)}></img>
            <img src={images.img3} alt='' className='w-16 h-20 mx-1 md:mr-0 md:ml-auto' onClick={() => setActiveImage(images.img3)}></img>
            <img src={images.img4} alt='' className='w-16 h-20 mx-1 md:mr-0 md:ml-auto' onClick={() => setActiveImage(images.img4)}></img>
            <img src={images.img5} alt='' className='w-16 h-20 mx-1 md:mr-0 md:ml-auto' onClick={() => setActiveImage(images.img5)}></img>
           </div>
        <div className='flex items-center order-1 md:order-2 justify-right md:col-span-2'>
        <img src={ActiveImg} alt='Oversized Stripped Hoodie' className="h-auto mx-auto w-67"></img>
        </div>
        <div className='flex flex-col justify-start order-3 gap-2 md:col-span-3'>
            <h3 className='text-2xl font-bold font-body'>OVERSIZED STRIPED SWEATER</h3>
            <p className='text-gray-500'>the Oversized Striped Sweater by Pull&Bear, 
              a perfect blend of comfort and style. 
              Crafted with premium quality materials, this sweater offers a relaxed and trendy look. 
              Its oversized design provides ultimate comfort, 
              while the classic striped pattern adds a touch of sophistication </p>
            <div className='flex flex-row gap-16'>
            <h6 className='text-lg font-medium text-center'>EGP 1,490</h6>
            <div>
              <button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={decreaseCount}>-</button>
              <span className='px-6 py-4 rounded-lg'>{count}</span>
              <button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={increaseCount}>+</button>
            </div>
            </div>
            <Dropdown options={["Small", "Medium", "Large"]} onSelect={handleSizeSelect} />
            <Button className="mt-4" text = "ADD TO MY BASKET" color="primary"/>
        </div>
        </div>
        </Section>
        </Layout>
    );
}

export default Product;