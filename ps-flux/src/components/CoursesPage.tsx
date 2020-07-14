import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import courseStore from "../stores/courseStore";
import * as courseActions from "../actions/courseActions";
import { Link } from "react-router-dom";

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  function onChangeData() {
    setCourses(courseStore.getCourses());
  }

  useEffect(() => {
    courseStore.addChangeListener(onChangeData);
    if (courseStore.getCourses().length === 0) {
      courseActions.loadCourses();
    }
    // cleanup
    return () => courseStore.removeChangeListener(onChangeData);
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
