import dispatcher from "../appDispatcher";
import * as couseApi from "../api/courseApi";
import { ActionType } from "./actionTypes";
export function saveCourse(course: any) {
  return couseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: !!course.id
        ? ActionType.UPDATE_COURSES
        : ActionType.CREATE_COURSE,
      course: savedCourse,
    });
  });
}
export function deleteCourse(courseId: any) {
  return couseApi.deleteCourse(courseId).then(() => {
    dispatcher.dispatch({
      actionType: ActionType.DELETE_COURSE,
      courseId,
    });
  });
}

export function loadCourses() {
  return couseApi.getCourses().then((courses) => {
    dispatcher.dispatch({
      actionType: ActionType.LOAD_COURSES,
      courses,
    });
  });
}
