import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";


export const Des = ({ description }) => {
  const [showText, setShowText] = useState(false);

  return (
    <div>

      <IconButton color="primary" aria-label="" onClick={() => setShowText(!showText)}>
        {showText ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>

      {showText && <p className="pfont"> {description} </p>}

    </div>
  );
};
