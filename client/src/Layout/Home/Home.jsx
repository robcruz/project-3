import React, { Component } from "react";
import "./Home.css";
import axios from "axios";
import { PropagateLoader } from 'react-spinners';
// Components
import Student from "../../components/Student/Student";
import SearchStudents from "../../components/SearchStudent/SearchStudents";

class Home extends Component {
  state = {
    data: null,
    allStudents: null,
    error: ""
  };

  async componentDidMount() {
    try {
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  removeStudent = async id => {
    try {
      const studentRemoved = await axios.delete(`/api/students/${id}`);
      const students = await axios("/api/students/");
      this.setState({ data: students.data });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  searchStudents = async username => {
    let allStudents;
    allStudents = [...this.state.data.students];
    if (this.state.allStudents === null) this.setState({ allStudents });

    let students;

    students = this.state.data.students.filter(({ name }) =>
      name.toLowerCase().includes(username.toLowerCase())
    );

    if (students.length > 0) this.setState({ data: { students } });

    if (username.trim() === "")
      this.setState({ data: { students: this.state.allStudents } });
  };

  render() {
    let students;

    if (this.state.data)
      students =
        this.state.data.students &&
        this.state.data.students.map(student => (
          <Student key={student._id} {...student} removeStudent={this.removeStudent} />
        ));
    else return <div className="Spinner-Wrapper"> <PropagateLoader color={'#333'} /> </div>;

    if (this.state.error) return <h1>{this.state.error}</h1>;
    if (this.state.data !== null)
      if (!this.state.data.students.length)
        return <h1 className="No-Students">No Item(s)</h1>;

    return (
      <div className="Table-Wrapper">
        <h1>Check Out the Latest Deals, Here!</h1>
        <SearchStudents searchStudents={this.searchStudents} />
        <table className="Table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Email</th>
              <th>Number of Item(s)</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>{students}</tbody>
        </table>
      </div>
    );
  }
}

export default Home;
