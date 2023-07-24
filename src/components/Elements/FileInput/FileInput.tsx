import { css } from '@emotion/css';
import React, { FC, ReactElement, useRef, useMemo, useState } from 'react';
import { extractExt } from '@/utils/file';
import { _each } from '@/utils/fn/_';

export interface ReadedFile {
  name: string;
  ext: string;
  dataUrl: string | ArrayBuffer | null;
  file: File;
  type: string;
}

export interface FileInputProps {
  triggerButton: ReactElement;
  // onRead?(file: ReadedFile): void;
  onProgress?(percent: number): void;
  onChange?(file: FileList): void;
  draggable?: boolean;
  accept?: string;
  disabled?: boolean;
  multiple?: boolean;
  // draggingRender?(): ReactElement;
}

export const FileInput: FC<FileInputProps> = ({
  triggerButton,
  draggable = false,
  // onRead = () => {},
  onProgress = () => {},
  onChange = () => {},
  accept,
  disabled,
  multiple,
  // draggingRender = () => null,
}) => {
  const realInput = useRef<HTMLInputElement>(null);
  const [dragover, setDragover] = useState<boolean>(false);

  const dispatchFileClick = () => {
    if (!realInput.current) {
      return;
    }

    const e = new MouseEvent('click');
    realInput.current.dispatchEvent(e);
  };

  const fileRead = (
    files: FileList,
    onRead: (file: ReadedFile) => void = () => {},
  ) => {
    const reader = new FileReader();

    reader.addEventListener('progress', e => {
      if (e.lengthComputable) {
        const percentage = Math.round((e.loaded * 100) / e.total || 1);
        onProgress(percentage);
      }
    });

    reader.addEventListener('load', e => {
      // onRead({
      //   name: e.name,
      //   ext: extractExt(e.name),
      //   type: e.type,
      //   dataUrl: reader.result,
      //   file: e,
      // });
    });

    // _each(files, (f: File) => reader.readAsDataURL(f));
  };

  const onDragEnter = (e: DragEvent) => {
    e.preventDefault();

    if (!e.dataTransfer?.items.length) {
      return;
    }

    setDragover(true);
  };

  const onDragLeave = () => {
    setDragover(false);
  };

  const onDrop = (e: DragEvent) => {
    e.preventDefault();
    setDragover(false);

    if (!dragover || !e.dataTransfer?.items.length) {
      return;
    }

    onChange(e.dataTransfer.files);

    fileRead(e.dataTransfer.files, file => {
      // onRead(file);
      if (realInput.current) {
        realInput.current.value = '';
      }
    });
  };

  const renderProps = draggable
    ? { onClick: dispatchFileClick }
    : {
        onClick: dispatchFileClick,
        onDragOver: onDragEnter,
        onDragEnter,
        onDragLeave,
        onDrop,
        className: `
        ${triggerButton.props.className} 
        ${dragover ? dropFrame : ''}
        `,
      };

  return (
    <>
      {React.cloneElement(triggerButton, renderProps)}
      <input
        multiple={multiple}
        disabled={disabled}
        type="file"
        className="hidden"
        ref={realInput}
        accept={accept}
        onChange={e => {
          if (!e.target.files) {
            return;
          }
          onChange(e.target.files);
          fileRead(e.target.files, file => {
            // onRead(file);
            e.target.value = '';
          });
        }}
      />
    </>
  );
};

const dropFrame = css`
  position: relative;

  &::after {
    content: 'DROP HEAR';
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 4px dashed #aaa;
    background-color: #e4e4e4b3;
    font-size: 32px;
  }
`;
