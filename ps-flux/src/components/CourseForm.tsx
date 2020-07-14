import React from "react";
import TextInput from "./common/TextInput";

function DeleteCourse(props: any) {
  if (!!props.course.id) {
    return (
      <>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.onDeleteCourse(props.course.id)}
        >
          Delete
        </button>
      </>
    );
  }
  return null;
}

function CourseForm(props: any) {
  return (
    <>
      <form onSubmit={props.onFormSubmit}>
        <TextInput
          id="title"
          name="title"
          label="Title"
          value={props.course?.title || ""}
          onChange={props.onFormChange}
          error={props.errors.title}
        />

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              className="form-control"
              value={props.course?.authorId || ""}
              onChange={props.onFormChange}
            >
              <option value="" />
              <option value="1">Cory House</option>
              <option value="2">Scott Allen</option>
            </select>
          </div>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
        <TextInput
          id="category"
          name="category"
          label="Category"
          value={props.course?.category}
          onChange={props.onFormChange}
          error={props.errors.category}
        />

        <input type="submit" value="Save" className="btn btn-primary" />
        <DeleteCourse
          course={props.course}
          onDeleteCourse={props.onDeleteCourse}
        />
      </form>
    </>
  );
}

export default CourseForm;
