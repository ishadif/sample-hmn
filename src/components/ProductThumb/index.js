import React, {Component, Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Icon from '../Icon';
import styles from './style.css';

class Productthumb extends Component {
    constructor(props){
        super(props)

        this.state = {
            favorited: this.props.favorited
        }
    }
    handleFavorite = () => {
        this.setState({
            favorited: !this.state.favorited
        })
    }
    handleProductDetail = () => {
        this.props.history.push(`/product/${this.props.link}`)
    }
    render() {
        return(
            <div className={styles.wrap}>
                {/* product image thumbnail */}
                <div className={styles.imageWrap}>
                    <div className={styles.favoriteOverlay} onClick={this.handleFavorite}>
                        <Icon type={this.state.favorited ? 'heart':'heart-o'} style={{fontSize: 20, color: this.state.favorited ? '#DA544F':'#fff'}}/>
                    </ div>
                    <img
                        src={this.props.image}
                        className={styles.image}
                        onClick={this.handleProductDetail}
                    />
                    {/* <div className={'typeOverlay'}>
                        {this.props.type}
                    </ div> */}
                </ div>
                {/* product information */}
                <div className={styles.infoWrap} onClick={this.handleProductDetail}>
                    {/* <Link to={`${this.props.link}`}> */}
                        <div className={styles.title}>
                            {this.props.title}
                        </ div>
                    {/* </ Link> */}
                    {/* <Link to={`${this.props.supplier.link}`}> */}
                        <div className={styles.supplier}>
                            {this.props.supplier.name}
                        </ div>
                    {/* </ Link> */}
                    <div className={styles.priceWrap}>
                        <div className={styles.price}>
                            Rp. {this.props.pricetag.price}
                        </ div>
                        <div className={styles.priceDiscountedRow}>
                        {this.props.pricetag.discounted ? (
                            <Fragment>
                                <div className={styles.normalPrice}>
                                    Rp. {this.props.pricetag.normal}
                                </ div>
                                <div className={styles.discountWrap}>
                                    {this.props.pricetag.discount}
                                </ div>
                            </ Fragment>
                        ) : null}
                        </ div>
                    </ div>
                </ div>
            </ div>
        )
    }
}

Productthumb.defaultProps = {
    image: 'https://img.etsystatic.com/il/6badce/1412555593/il_680x540.1412555593_5nup.jpg',
    link: 'produk_url',
    title: 'Bola Warna-warni dengan Motif Lucu',
    code: 'AA001',
    rating: 3.5,
    pricetag: {
        discounted: true,
        discount: '50%',
        price: 1000000,
        normal: 2000000,
    },
    favorited: false,
    type: 'ready_stock',
    supplier: {
        name: 'Nama Toko',
        link: 'toko_url',
    },
}

export default withRouter(Productthumb)