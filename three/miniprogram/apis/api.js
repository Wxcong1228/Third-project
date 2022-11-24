import request from "../utils/request.js"

export function getBanner() {
  return request('/banner/1', {}, {
    prompt: false
  });
}

export function getThemeInfo(theme_id) {
  return request('/theme/' + theme_id, {
    ids: theme_id
  }, {
    prompt: false
  });
}

export function getItems() {
  return request('/product/recent', {}, {
    prompt: false
  });
}

export function getDetail(id) {
  return request('/product/' + id, {}, {
    prompt: false
  });
}

export function getClass() {
  return request('/category/all', {}, {
    prompt: false
  });
}

export function getClassDetail(class_id) {
  return request('/product/by_category', {
    id : class_id
  }, {
    prompt: false
  });
}



