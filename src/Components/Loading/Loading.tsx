export default function Loading() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
