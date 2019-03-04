import React from 'react';
import { Image as ImageRebass, Box } from 'rebass';
import Caption from '../typography/Caption';
import Link from '../link';

const Image = ({ src, caption, captionUrl, url, captionPx }) => {
  const captionComponent = (
    <Caption textAlign="right" px={captionPx}>
      {caption}
    </Caption>
  );
  const maybeCaptionWitLink = captionUrl ?
    (<Link to={captionUrl} withTextDecoration={false}>
      {captionComponent}
    </Link>)
    :
    captionComponent
  const image = <ImageRebass src={src} width={1} />;
  return (
    <>
      {url ? (
        <Link to={url}>
          {image}
        </Link>
      ) : image}
      <Box alignSelf="flex-end">
        {maybeCaptionWitLink}
      </Box>
    </>
  );
}

export default Image;
