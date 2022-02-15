import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllCourses, deCreaseToCart } from '../../Store/reducers/cartReducers';
import { FiTrash } from 'react-icons/fi';
import PanelHead from './PanelHead'
import './Style.scss'

const PanelList = () => {

    const { cartItems, courseItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const hasItem = cartItems.length === 0;
    const hasCourse = courseItems.length === 0;
    const totalPrice = cartItems.reduce((price, total) => price + total.quantity * total.price, 0)

    const handleDeleteItem = (courses) => {
        dispatch(deCreaseToCart(courses))
    }

    const handleSubmit = () => {
        dispatch(AllCourses())
    }


    return (
        <section className="panel">
            <div className="panel-content container">
                <PanelHead />
                {
                    hasItem ? '' : (
                        <div className="panel-content__list">
                            <div className="panel-content__list-title">Cart</div>
                            <div className="panel-content__list-courses">
                                <div className="panel-content__list-courses__box">
                                    {
                                        cartItems.map((cart) => (
                                            <div className="panel-content__list-courses__box-item" key={cart.id}>
                                                <div className="panel-content__list-courses__box-item__details">
                                                    <img src={cart.img} alt={cart.title} />
                                                    <span className="panel-content__list-courses__box-item__details-name">{cart.title}</span>
                                                </div>
                                                <div className="panel-content__list-courses__box-item__actions">
                                                    <span className='panel-content__list-courses__box-item__actions-price'>{cart.price}$</span>
                                                    <button className="panel-content__list-courses__box-item__actions-btn" onClick={() => handleDeleteItem(cart)}><FiTrash /></button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className='panel-content__list-courses__checkout'>
                                    <div className="panel-content__list-courses__checkout-total">Total : {totalPrice}$</div>
                                    <button className="panel-content__list-courses__checkout-btn" onClick={handleSubmit}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div className="panel-content__list">
                    <div className="panel-content__list-title">My Courses</div>
                    <div className="panel-content__list-courses">
                        <div className="panel-content__list-courses__box">
                            {
                                hasCourse ? '' : (
                                    courseItems.map((course) => (
                                        <div className="panel-content__list-courses__box-item" key={course.id}>
                                            <div className="panel-content__list-courses__box-item__name">{course.title}</div>
                                            <button className="panel-content__list-courses__box-item__btn">Download</button>
                                        </div>
                                    ))
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PanelList