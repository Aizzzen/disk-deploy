import React from 'react';
import './FileList.scss'
import File from "./file/File";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {useSelector} from "react-redux";

const FileList = () => {
    const files = useSelector(state => state.file.files)
    const fileView = useSelector(state => state.file.view)

    if(files.length === 0) {
        return (
            <div className='loader'>
                Files not found
            </div>
        )
    }

    if(fileView === 'plate') {
        return (
            <div className='fileplate'>
                {files.map(file =>
                        <File key={file._id} file={file} />
                )}
            </div>
        );
    }

    if(fileView === 'list') {
        return (
            <div className='filelist'>
                <div className="filelist__header">
                    <div className="filelist__name">Name</div>
                    <div className="filelist__date">Date</div>
                    <div className="filelist__size">Size</div>
                </div>
                <TransitionGroup>
                    {files.map(file =>
                        <CSSTransition
                            key={file._id}
                            timeout={500}
                            classNames={'file'}
                            exit={false}
                        >
                            <File file={file} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        );
    }

};

export default FileList;
