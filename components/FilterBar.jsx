'use client';
export default function FilterBar({ onFilter }) {
  const apply = () => {
    const q = document.getElementById('q').value;
    const gender = document.getElementById('gender').value;
    const minAge = Number(document.getElementById('minAge').value || 18);
    const maxAge = Number(document.getElementById('maxAge').value || 99);
    onFilter({ q, gender, minAge, maxAge });
  };

  return (
    <div className="card card-soft rounded-4 p-3 p-sm-4 mb-4">
      <div className="row g-2 align-items-end">
        <div className="col-12 col-md">
          <label className="form-label">Search</label>
          <input id="q" className="form-control input-soft" placeholder="name, tag, location..." />
        </div>
        <div className="col-6 col-md-2">
          <label className="form-label">Gender</label>
          <select id="gender" className="form-select">
            <option>Any</option>
            <option>female</option>
            <option>male</option>
          </select>
        </div>
        <div className="col-3 col-md-1">
          <label className="form-label">Min Age</label>
          <input id="minAge" type="number" className="form-control input-soft" min="18" defaultValue="18" />
        </div>
        <div className="col-3 col-md-1">
          <label className="form-label">Max Age</label>
          <input id="maxAge" type="number" className="form-control input-soft" min="18" defaultValue="99" />
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-accent rounded-pill px-4 w-100" onClick={apply}>Filter</button>
        </div>
      </div>
    </div>
  );
}
