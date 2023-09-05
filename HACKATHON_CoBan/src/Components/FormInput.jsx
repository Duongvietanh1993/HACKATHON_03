import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function FormInput() {
  //state lưu trữ công việc
  const [job, setJob] = useState("");
  //state lưu trữ danh sách công việc
  const [jobs, setJobs] = useState(() => {
    return JSON.parse(localStorage.getItem("jobs")) || [];
  });
  //lưu trữ công việc muốn sửa
  const [editIndex, setEditIndex] = useState(-1);

  //ref trỏ tới ô input
  const refInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== -1) {
      const newJob = {
        id: uuidv4(),
        status: false,
        name: job,
      };
      const updatedJobs = [...jobs];
      updatedJobs[editIndex] = newJob;
      localStorage.setItem("jobs", JSON.stringify(updatedJobs));
      setJobs(updatedJobs);
      setJob("");
      setEditIndex(-1);
      refInput.current.focus();
    } else {
      if (job !== "") {
        const newJob = {
          id: uuidv4(),
          status: false,
          name: job,
        };
        const updatedJobs = [...jobs, newJob];
        localStorage.setItem("jobs", JSON.stringify(updatedJobs));
        setJobs(updatedJobs);
        setJob("");
        refInput.current.focus();
      }
    }
  };
  const handleEdit = (index) => {
    setEditIndex(index);
    setJob(jobs[index].name);
    refInput.current.focus();
  };
  const handleDelete = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    setEditIndex(-1);
  };
  const handleChange = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = !updatedJobs[index].status;
    localStorage.setItem("jobs", JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div
          className="row d-flex justify-content-center align-items-center
        h-100"
        >
          <div className="col col-xl-10">
            <div className="card">
              <div className="card-body p-2">
                <div className="card-body p-4" style={{ color: "white" }}>
                  <h3 style={{ fontSize: 40, color: "white" }}>Todo List</h3>
                  <p>Get things done, one item at a time</p>
                  <hr></hr>
                </div>

                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <ul className="list-group mb-0">
                      {jobs.map((job, index) => (
                        <li
                          key={index}
                          className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                          style={{ backgroundColor: "rgb(255, 150, 150)" }}
                        >
                          <div>
                            {!job.status ? (
                              <span>{job.name}</span>
                            ) : (
                              <s>{job.name}</s>
                            )}
                          </div>

                          <div>
                            <input
                              style={{ border: "1px solid rgb(255, 92, 92)" }}
                              className="form-check-input me-2 "
                              type="checkbox"
                              defaultChecked=""
                              onChange={(e) => handleChange(index)}
                              checked={job.status == true}
                            />
                            <a
                              href="#!"
                              className="text-info"
                              title="Sửa công việc"
                              onClick={() => handleEdit(index)}
                            >
                              <i className="fas fa-pencil-alt me-3" />
                            </a>
                            <a
                              href="#!"
                              className="text-danger"
                              title="Xóa công việc"
                              onClick={() => handleDelete(index)}
                            >
                              <i className="fas fa-trash-alt" />
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="d-flex justify-content-end gap-3">
                  <p>Move done item at the end?</p>
                  <div className="form-check form-switch">
                    <input
                      style={{ color: "white" }}
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    ></input>
                  </div>
                </div>
                <div className="p-5 m-3 mt-0 mb-0">
                  <h5 className="pb-0" style={{ color: "white" }}>
                    Add to the todo list
                  </h5>
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex justify-content-center align-items-center mb-4 "
                  >
                    <div className="form-outline flex-fill">
                      <input
                        ref={refInput}
                        type="text"
                        id="form2"
                        className="form-control"
                        value={job}
                        onChange={(e) => setJob(e.target.value)}
                      />
                    </div>
                    <button type="submit" className="btn ms-1 ">
                      {editIndex !== -1 ? " SAVE" : "ADD"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
