import React from 'react';
import { connect } from 'react-redux';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';

const CollectionsOverview = (props) => {
  const { collections } = props;
  return (
    <div className='collections-overview'>
      {collections.map((collection) => {
        return <CollectionPreview key={collection.id} collection={collection} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
