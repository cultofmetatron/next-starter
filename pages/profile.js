import React from 'react';
export default (props) => {
  return (
    <div>
      <h1>id : {props.url.query.id}</h1>
    </div>
  );
}
