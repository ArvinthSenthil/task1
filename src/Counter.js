import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { useState } from "react";


export function Counter() {
  // const likes = 1;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (

    <div className="counter-container">
      <IconButton color="success" aria-label="delete" onClick={() => setLike(like + 1)}>
        <Badge badgeContent={like} color="success">👍

        </Badge>
      </IconButton>
      <IconButton color="error" aria-label="delete" onClick={() => setDislike(dislike + 1)}>
        <Badge badgeContent={dislike} color="error">👎

        </Badge>
      </IconButton>

    </div>
  );
}
