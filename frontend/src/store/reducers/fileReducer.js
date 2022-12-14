/* eslint-disable */
const initialState = {
    files: [],
    currentDir: null,
    popupDisplay: 'none',
    dirStack: [],
    view: 'list'
}

export default function fileReducer(state = initialState, action) {
    switch (action.type) {
        // для инициализации файлов
        case 'SET_FILES':
            return {
                ...state,
                files: action.payload
            }
        // для текущей директории
        case 'SET_CURRENT_DIR':
            return {
                ...state,
                currentDir: action.payload
            }
        case 'ADD_FILE':
            return {
                ...state,
                files: [...state.files, action.payload]
            }
        case 'SET_POPUP_DISPLAY':
            return {
                ...state,
                popupDisplay: action.payload
            }
        // закидывает в стек
        case 'PUSH_TO_STACK':
            return {
                ...state,
                dirStack: [...state.dirStack, action.payload]
            }
        case 'DELETE_FILE':
            return {
                ...state,
                files: [...state.files.filter(file => file._id != action.payload)]
            }
        case 'SET_VIEW':
            return {
                ...state,
                view: action.payload
            }
        default:
            return state
    }
}

export const setFiles = files => ({ type: 'SET_FILES', payload: files })
export const setCurrentDir = dir => ({ type: 'SET_CURRENT_DIR', payload: dir })
export const addFile = file => ({ type: 'ADD_FILE', payload: file })
export const setPopupDisplay = display => ({ type: 'SET_POPUP_DISPLAY', payload: display })
export const pushToStack = dir => ({ type: 'PUSH_TO_STACK', payload: dir })
export const deleteFileAction = dirId => ({ type: 'DELETE_FILE', payload: dirId })
export const setFileView = payload => ({ type: 'SET_VIEW', payload })
