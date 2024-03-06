import React,{useState} from 'react'
import ReactPlaceholderTyping from 'react-placeholder-typing'
const Placeholdertyping = () => {
    const placeholders = ['https://dubsub.ai', 'https://producthunt.com', 'https://www.indiehackers.com'];
    const [website, setWebsite] = useState('');
  
    return <ReactPlaceholderTyping
        placeholders={placeholders}
        value={website}
        onChange={(value) => {
          setWebsite(value)
        }}
        fontFamily={'Roboto'}
        
      />
}

export default Placeholdertyping