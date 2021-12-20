import { useReducer } from 'react'
import actions from './actions'
const initVideoState = {
  currentVideo: 0,
  isPlaying: false,
  progress: 0,
  width: 0,
  subtitle: 'en',
  isSubtitle: true,
  speed: 1,
  isMuted: false,
  volume: 100,
  favorite: false,
  videoState: {},
  current: 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.currentVideo:
      return { ...state, currentVideo: action.payload }

    case actions.isPlaying:
      return { ...state, isPlaying: !state.isPlaying }

    case actions.progress:
      return { ...state, progress: action.payload }

    case actions.width:
      return { ...state, width: action.payload }

    case actions.isSubtitle:
      return { ...state, isSubtitle: !state.isSubtitle }

    case actions.subtitle:
      return { ...state, subtitle: action.payload }

    case actions.speed:
      return { ...state, speed: action.payload }

    case actions.isMuted:
      return { ...state, isMuted: !state.isMuted }

    case actions.volume:
      return { ...state, volume: action.payload }

    case actions.favorite:
      return { ...state, favorite: !state.favorite }

    case actions.videoState:
      return { ...state, videoState: action.payload }

    case actions.current:
      return { ...state, current: action.payload }

    default:
      throw new Error()
  }
}
export default () => {
  const [state, dispatch] = useReducer(reducer, initVideoState)

  const setState = (type, payload) => dispatch({ type, payload })

  return { currentState: state, setState }
}
