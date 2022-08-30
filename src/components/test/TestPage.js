import { Link } from "react-router-dom";

function TestPage() {
  return (
    <div>
      <div class='carousel-inner' role='listbox'>
        <div class='carousel-item'>
          <div class='col-md-3'>
            <div class='card'>
              <div class='card-img'>
                <img
                  src='https://source.unsplash.com/m-eNBfYYrbA/450x650'
                  class='img-fluid'
                  alt='ddd'
                />
              </div>
              <div class='card-img-overlays'>Slide 2</div>
            </div>
          </div>
          <div class='col-md-3'>
            <div class='card'>
              <div class='card-img'>
                <img
                  src='https://source.unsplash.com/W2XfQIptWYs/450x650'
                  class='img-fluid'
                  alt='ddd'
                />
              </div>
              <div class='card-img-overlays'>Slide 3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestPage;
