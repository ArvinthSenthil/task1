import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Counter } from "./Counter";
import { Des } from "./Des";


export function Movie({ name, pic, rating, description }) {
  return (
    <Card className="movie-container">
      <img src={pic} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-info">
          <div className="movie-specs">
            <h3>{name} </h3>
            <p>
              <span role="img" aria-label="star">
                ⭐ {rating}
              </span>
            </p>
          </div>
          <Des description={description} />
          <CardActions>
            <Counter />
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
}
