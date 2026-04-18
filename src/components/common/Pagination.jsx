function Pagination({ page, total, setPage }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <div className="mt-3 d-flex gap-2">
      {pages.map((p) => (
        <button
          key={p}
          className={`btn ${
            p === page ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setPage(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
