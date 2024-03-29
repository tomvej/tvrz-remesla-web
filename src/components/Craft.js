import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from 'gatsby-image';
import Carousel, {ModalGateway, Modal} from 'react-images';

import style from './Craft.module.scss';
import bootstrap from '../bootstrap.module.scss';

const ViewComponent = ({data}) => (
    <div className={bootstrap.container}>
        <Img
            fluid={data.fluid}
        />
    </div>
);

const Craft = ({name, children, images, alternate, showcase}) => {
    const [galleryIndex, setGalleryIndex] = useState(null);
    return (
        <div className={classnames(style.main, {[style.alternate]: alternate})}>
            <div className={style.description}>
                <h3 className={style.title}>{name}</h3>
                {children}
            </div>
            <div className={style.images}>
                {images.slice(0, showcase).map(({childImageSharp}, i) => (
                    <div
                        key={childImageSharp.fluid.src}
                        onClick={() => setGalleryIndex(i)}
                        className={style.image}
                    >
                        <Img
                            fluid={childImageSharp.fluid}
                            className={style.imageWrapper}
                        />
                    </div>
                ))}
            </div>
            <ModalGateway>
                {(galleryIndex !== null) && (
                    <Modal onClose={() => setGalleryIndex(null)}>
                        <Carousel
                            currentIndex={galleryIndex}
                            components={{View: ViewComponent}}
                            views={images.map(({childImageSharp}) => childImageSharp)}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

Craft.propTypes = {
    name: PropTypes.string.isRequired,
    alternate: PropTypes.bool,
    children: PropTypes.node,
    showcase: PropTypes.number,
};

Craft.defaultProps = {
    alternate: false,
    showcase: 1,
}

export default Craft;
