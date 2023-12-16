import App from './App';
import './Todo.css';

function DoneTasks() {
  return (
    <>
      <App />
      <p className="typewriter">Here you will find the list of the done tasks!</p>
      <button type="button" className="taskname" data-bs-toggle="modal" data-bs-target="#challengeModal">
        Task Name
      </button>
      <br /><br />

      {/* <!-- Modal --> */}
      <div className="modal fade" id="challengeModal" tabIndex="-1" role="dialog" aria-labelledby="challengeModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title task" id="challengeModalLabel">Task Name</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Task Description</p>

              <input type="text" className="form-control" id="updatetask" name="name" placeholder="Update this task" />
              <button type="button" className="btn mb-3" id="updatebtn">
                <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Update
              </button>

              <button type="button" className="btn btn-danger">
                <i className="fa fa-trash-o" aria-hidden="true"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DoneTasks;
