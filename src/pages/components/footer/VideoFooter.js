import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
            <h3>@YogaChannel</h3>
            <p>Descrição do video</p>
            <div className="videoFooter__music">
            <MusicNoteIcon  className="videoFooterMusic__icon"/>
            <div className="videoFooterMusic__text">
            <p>Título da musica</p>
              </div>
            </div>
        </div>
        <img 
        className= "videoFooter__record"
        alt="img de vinil"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
        
        />

    </div>
  )
}

export default VideoFooter