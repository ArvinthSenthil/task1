import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



export const Des = ({ description,id }) => {
  const [showText, setShowText] = useState(false);
  const history=useHistory();

  return (
    <div>

      <IconButton color="primary" aria-label="" onClick={() => setShowText(!showText)}>
        {showText ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      <IconButton color="primary"  onClick={()=>history.push(`/movies/${id}`)} aria-label="">
        <InfoIcon/>
      </IconButton>

      {showText && <p className="pfont"> {description} </p>}

    </div>
  );
};
