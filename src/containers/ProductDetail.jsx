import React from "react";
import ProductInfo from '@components/ProductInfo';
import '@styles/ProductInfo.scss';
import close from '@icons/icon_close.png';

const ProductDetail = () => {
    return (
        <aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
    );
}

export default ProductDetail;