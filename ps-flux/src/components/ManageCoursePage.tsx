import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router-dom";
import * as courseActions from "../actions/courseActions";
import CourseForm from "./CourseForm";
import courseStore from "../stores/courseStore";
import { toast } from "react-toastify";
const ManageCoursePage = (props: any) => {
  const [errors, setErrors] = useState({});
  // eslint-disable-next-line
  const [courses, setCourses] = useState(courseStore.getCourses());
  const [course, setCourse] = useState({
    id: null,
    title: "",
    authorId: null,
    category: "",
  });
  function formIsValid() {
    const _errors: any = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    // Form is valid if errors haven't properties

    return Object.values(_errors).length === 0;
  }

  function onChangeData() {
    setCourses(courseStore.getCourses());
  }

  function handleChange({ target }: any) {
    setCourse({
      ...course,
      [target.name]: target.value,
    });
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseActions
      .saveCourse(course)
      .then(() => {
        props.history.push("/courses");
        toast.success("Course saved.");
      })
      .catch(() => toast.error("Course not saved."));
  }

  useEffect(() => {
    courseStore.addChangeListener(onChangeData);
    const slug = props.match.params.slug;
    if (courses.length === 0) {
      courseActions.loadCourses();
    } else if (slug) {
      setCourse(courseStore.getCoursesBySlug(slug));
    }
    return () => courseStore.removeChangeListener(onChangeData);
  }, [props.match.params.slug, courses]);

  function deleteCourseFn(courseId: any) {
    courseActions
      .deleteCourse(courseId)
      .then(() => {
        props.history.push("/courses");
        toast.success("Course Deleted");
      })
      .catch(() => toast.error("Course not deleted."));
  }
  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to live?" /> */}
      <CourseForm
        errors={errors}
        course={course}
        onDeleteCourse={deleteCourseFn}
        onFormChange={handleChange}
        onFormSubmit={handleSubmit}
      />
      )
    </>
  );
};

export default ManageCoursePage;
