import React from 'react'; 
import './Flexbox.css'; 

const Flexbox = () => {
  return (
    <div className='flexbox'>
      <div className='box-container'>
        <div className='box box-1'>
          <div className='box-text'>
              <div style={{border: "solid 1px black"}}>
                1asdfsdfsdfasdffffffffffffffffffffffffffafsdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
              </div>
          </div>
        </div>
        <div className='box box-2'>
          <div className='box-text'>1asdfsdfsdf asdfffffffffffffffff fffffffffdafsssssssssssssss ssssssssss ssssssssssssss ssss</div>
        </div>
        <div className='box box-3'>
          <div className='box-text'>1asdfsdfsdfasdffffff fffffffffffffffffffffff fffffff fffffffffff ffffffffff</div>
        </div>
        <div className='box box-4'>
          <div className='box-text'>1asdfsdfsdfasd fffffffffffffffffffffff fff fffffffffff fffffffff fffffffffff</div>
        </div>
        <div className='box box-5'>
          <div className='box-text'>1 asdfsdfsdfasdfffffffffffffffff fffffffffffffffff fffffffff fffffffff fffff</div>
        </div>
        <div className='box box-6'>
          <div className='box-text'>1asdfsdfs dfasdffffffffff ffffffffffff fffffffffff ffffffffff fffffffff fffff</div>
        </div>
        <div className='box box-7'>
          <div className='box-text'>1asdfsdfsdfa sdfffffffffffff fffffff fffffffffffffff fffffffffff fffffffffff</div>
        </div>
        <div className='box box-8'>
          <div className='box-text'>1asdfsdf sdfasdffffffffff ffffffffffffffffff fffffff ffffffff fff fffffffffff</div>
        </div> 
        <div className='box box-9'>
          <div className='box-text'>1asdfsdfsdf asdfffffffff ffffffffffffff fffffffffffffff fff fffffffffffffff</div>
        </div>
      </div>
    </div>
  );
}

export default Flexbox;