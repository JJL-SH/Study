// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// 数据存储位置
const appState = {
  title: {
    text: 'React.js title',
    color: 'red'
  },
  content: {
    text: 'React.js content',
    color: 'blue'
  }
}
// 发生数据修改的地方
function stateChanger(state, action) {
  if (!state) {
    return {
      title: {
        text: 'React.js title',
        color: 'red'
      },
      content: {
        text: 'React.js content',
        color: 'blue'
      }
    }
  }
  switch (action.type) {
    case 'UPDATE_TITLE_TEXT':
      // 解构出一个新的对象，用于新老对象的比对
      return {
        ...state,
        title: {
          // 当新数据有和老数据有一样的时候，新数据会替换掉老数据
          // 如果没有触发则还是会引用老的数据，根据引用类型的特殊性判断两个数据是否相同
          ...state.title,
          text: action.text
        }
      }
      break;

    case 'UPDATE_TITLE_COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
      break;

    default:
      return state;
      break;
  }
}
// 创建包装方法
function createStore(reducer) {
  let state = null;
  // 定义一个空的监听者列表
  const listeners = [];
  // 提供一个方法给外部，向内部添加监听者
  const subscribe = (listener) => {listeners.push(listener)};
  // 向外部提供一个方法用于返回当前的存储数据
  const getState = () => state;
  // 触发函数中需要执行修改存储数据的函数，并且把存储数据以及指令发送给他
  // 他根据接收到的数据以及指令重新生成一个数据，替换掉原有数据
  // 之后执行所有需要监听变化的函数
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => {
      listener();
    })
  };
  // 初始化state
  dispatch({});
  // 向外部暴露方法
  return {getState,dispatch,subscribe};
}
// 渲染页面
function renderApp(newAppState, oldAppState = {}) {
  if (newAppState === oldAppState) {
    return;
  }
  console.log('render app...');
  renderTitle(newAppState.title, oldAppState.title);
  renderContent(newAppState.content, oldAppState.content);
}
function renderTitle(newTitle, oldTitle = {}) {
  if (newTitle === oldTitle) {
    return;
  }
  console.log('render title...');
  const titleNode = document.getElementById('title');
  titleNode.innerHTML = newTitle.text;
  titleNode.style.color = newTitle.color;
}
function renderContent(newContent, oldContent = {}) {
  if (newContent === oldContent) {
    return;
  }
  console.log('render content...');
  const contentNode = document.getElementById('content');
  contentNode.innerHTML = newContent.text;
  contentNode.style.color = newContent.color;
}


// 定义store
// 其中传入存储的数据、修改数据的方法
const store = createStore(appState, stateChanger);
// 拿出当前store中的数据
let oldState = store.getState();
// 设置观察者模式当数据发生变化时执行指定的方法
// 把新老数据传入
store.subscribe(() => {
  const newState = store.getState();
  renderApp(newState, oldState);
  oldState = newState;
})
// 初次渲染页面
renderApp(store.getState());

setTimeout(() => {
  // 发送修改数据请求，修改的标志以及内容
  store.dispatch({
    type: 'UPDATE_TITLE_TEXT',
    text: '完成修改'
  })
  store.dispatch({
    type: 'UPDATE_TITLE_COLOR',
    color: 'blue'
  })
}, 500);

const ADD_USER = 'ADD_USER';
const DELETE_USER = 'DELETE_USER';
const UPDATE_USER = 'UPDATE_USER';

const usersReducer = (state = [], action) => {
  switch (key) {
    case ADD_USER:
      return [
        ...state,
        action.user
      ]
      break;

    case DELETE_USER:
      let data = [...state];
      data.splice(action.index, 1)

      return data;
      break;

    case UPDATE_USER:
      let data = [...state];
      data.splice(action.index, 1, action.user);
      return data;
      break;

    default:
      return state;
      break;
  }
}