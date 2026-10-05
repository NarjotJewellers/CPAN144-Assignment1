import Navbar from "../../components/Navbar";
import TaskManager from "../../components/TaskManager";

export default function Tasks() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <TaskManager />
        </div>
      </div>
    </>
  );
}