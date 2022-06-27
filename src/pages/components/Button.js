import './Components.css'


export default ({txt = 'button', color = 'black', f_size = 16, bg = 'white', onClick = null}) =>{
      return(
            <button onClick={onClick} style={{color: `${color}`, fontSize: `${f_size}px`, backgroundColor: `${bg}`}} className='button' type='button'>{txt}</button>
      );
}