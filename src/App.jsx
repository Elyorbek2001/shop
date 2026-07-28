import './App.css';

function ProductCard(props) {
  return (
    <div className="col-md-3 mb-4">
      <div className="card h-100 position-relative">
        {props.sale && (
          <span className="badge bg-dark position-absolute top-0 end-0 m-0">Sale</span>
        )}
        <div
          className="bg-secondary bg-opacity-25 d-flex align-items-center justify-content-center"
          style={{ height: '180px' }}
        >
          <span className="text-secondary">450 x 300</span>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold">{props.title}</h5>

          {props.rating > 0 && (
            <p className="mb-1">
              <span className="text-warning">{'★'.repeat(props.rating)}</span>
              <span className="text-secondary">{'★'.repeat(5 - props.rating)}</span>
            </p>
          )}

          <p className="mb-2">
            {props.oldPrice && (
              <span className="text-decoration-line-through text-muted me-2">
                ${props.oldPrice}
              </span>
            )}
            <span className="text-danger fw-semibold">${props.price}</span>
          </p>

          <button className="btn btn-outline-dark w-100">{props.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  let products = [
    { title: 'Fancy Product', oldPrice: '40.00', price: '80.00', rating: 0, sale: false, buttonText: 'View options' },
    { title: 'Special Item', oldPrice: '20.00', price: '18.00', rating: 5, sale: true, buttonText: 'Add to cart' },
    { title: 'Sale Item', oldPrice: '50.00', price: '25.00', rating: 0, sale: true, buttonText: 'Add to cart' },
    { title: 'Popular Item', oldPrice: null, price: '40.00', rating: 5, sale: false, buttonText: 'Add to cart' },
    { title: 'Sale Item', oldPrice: '50.00', price: '25.00', rating: 0, sale: false, buttonText: 'Add to cart' },
    { title: 'Fancy Product', oldPrice: '120.00', price: '280.00', rating: 0, sale: false, buttonText: 'View options' },
    { title: 'Special Item', oldPrice: '20.00', price: '18.00', rating: 4, sale: true, buttonText: 'Add to cart' },
    { title: 'Popular Item', oldPrice: null, price: '40.00', rating: 5, sale: false, buttonText: 'Add to cart' },
  ];

  let productCards = [];
  for (let i = 0; i < products.length; i++) {
    let p = products[i];
    productCards.push(
      <ProductCard
        key={i}
        title={p.title}
        oldPrice={p.oldPrice}
        price={p.price}
        rating={p.rating}
        sale={p.sale}
        buttonText={p.buttonText}
      />
    );
  }

  return (
    <div className="page">
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom px-3">
        <span className="navbar-brand fw-semibold text-primary">Start Bootstrap</span>
        <div className="navbar-nav flex-row gap-4">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">About</a>
          <a className="nav-link" href="#">Shop ▾</a>
        </div>
        <button className="btn btn-outline-secondary btn-sm ms-auto">
          🛒 Cart <span className="badge bg-primary rounded-circle ms-1">0</span>
        </button>
      </nav>

      <div className="bg-dark text-white text-center py-5">
        <h1 className="fw-bold">Shop in style</h1>
        <p className="text-secondary">With this shop homepage template</p>
      </div>

      <div className="container py-5">
        <div className="row">{productCards}</div>
      </div>
    </div>
  );
}

export default App;
