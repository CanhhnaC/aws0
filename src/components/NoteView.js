import React from 'react';
import { Route } from 'react-router-dom';

import ReactMarkdown  from 'react-markdown';

import NoteHeader from './NoteHeader';
import Editor from '../containers/EditorContainer';

import Styles from '../styles.module.css';

export default (props) => {
  const {
    title, body, match
  } = props;
  return (
    <article className={Styles.content}>
      <NoteHeader title={title} match={match} />
      <div className={Styles.content__panes}>
        <ReactMarkdown className={Styles.content__pane} source={body} />
        <Route path="/:id/edit" component={Editor} />
      </div>
    </article>
  );
};
