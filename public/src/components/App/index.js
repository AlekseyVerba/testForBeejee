import Navbar from "../Navbar";
import { Routes, Route, Navigate } from "react-router-dom"
import Todo from "../Todo"
import FormLogin from "../FormLogin/";
import { useSelector } from "react-redux"
import { useEffect } from "react";
import { useActions } from "../../hooks/useActions"
import "./index.scss"


function App() {

  const { user } = useSelector(state => state.user)
  const { actionCheckAuth } = useActions()

  useEffect(() => {
    actionCheckAuth()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="main container-sm">
        {!user &&
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/auth" element={<FormLogin />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        }

        {user &&
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        }
      </div>
    </div>
  );
}

export default App;

