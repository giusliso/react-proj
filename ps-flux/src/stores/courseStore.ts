import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import { ActionType } from "../actions/actionTypes";
const CHANGE_EVENT = "change";
let _courses: any[] = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback: any) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback: any) {
    this.off(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug: string) {
    return _courses.find((c) => c.slug === slug);
  }
}

const store = new CourseStore();

Dispatcher.register((action: any) => {
  switch (action.actionType as ActionType) {
    case ActionType.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    case ActionType.UPDATE_COURSES:
      _courses = _courses.map((c) =>
        c.id === action.course.id ? action.course : c
      );
      store.emitChange();
      break;
    case ActionType.DELETE_COURSE:
      _courses = _courses.filter((c) => c.id !== action.courseId);
      console.log(_courses);
      store.emitChange();
      break;
    case ActionType.LOAD_COURSES:
      _courses = [...action.courses];
      store.emitChange();
      break;
    default:
  }
});
export default store;
