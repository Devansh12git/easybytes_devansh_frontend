import React, { useState } from 'react';
import './AddStudentForm.css';

function AddStudentForm() {
  const [enrollNo, setEnrollmentNo] = useState('');
  const [name, setStudentName] = useState('');
  const [marks, setStudentMarks] = useState('');
  const [age, setStudentAge] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/add-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          enrollNo,
          name,
          marks,
          age,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Student added successfully');
        // Clear form fields
        setEnrollmentNo('');
        setStudentName('');
        setStudentMarks('');
        setStudentAge('');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add student');
    }
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <label>
        Enrollment No:
        <input
          type="text"
          value={enrollNo}
          onChange={(e) => setEnrollmentNo(e.target.value)}
          required
        />
      </label>
      <label>
        Student Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setStudentName(e.target.value)}
          required
        />
      </label>
      <label>
        Student Marks:
        <input
          type="number"
          value={marks}
          onChange={(e) => setStudentMarks(e.target.value)}
          required
        />
      </label>
      <label>
        Student Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setStudentAge(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;
