import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import './directory.styles.scss';

const Directory = (props) => {
  const { sections } = props;
  return (
    <div className='directory-menu'>
      {sections.map((section) => {
        return <MenuItem key={section.id} section={section} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
