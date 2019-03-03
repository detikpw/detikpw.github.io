import React, { Fragment } from 'react';
import { Image as ImageRebass, Box } from 'rebass';
import Caption from '../typography/Caption';
import Link from '../link';

const Image = ({ src, caption, captionUrl, url }) => {
  const captionComponent = (
    <Caption textAlign="right">
      {caption}
    </Caption>
  );
  const maybeCaptionWitLink = captionUrl ?
    (<Link to={captionUrl} withTextDecoration={false}>
      {captionComponent}
    </Link>)
    :
    captionComponent
  const image = (
    <Fragment>
      <ImageRebass src={src}/>
      {caption &&
        <Box
          px={3}
          alignSelf="justify"
        >
          {maybeCaptionWitLink}
        </Box>}
    </Fragment>
  );
  return (
    url ? (
      <Link to={url}>
        {image}
      </Link>
    ) : image
  );
}

export default Image;
