import React from 'react';
import Container from '../Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import './Panel.scss'
import { addToCart, AllCourses, deCreaseToCart } from '../Store/reducers/cartReducers';
import { FiTrash } from 'react-icons/fi';


const Panel = () => {

    const { cartItems, courseItems } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const hasItem = cartItems.length === 0;
    const totalPrice = cartItems.reduce((price, total) => price + total.quantity * total.price, 0)

    const handleDeleteItem = (courses) => {
        dispatch(deCreaseToCart(courses))
    }

    const handleSubmit = () => {
        dispatch(AllCourses())
    }

    return (
        <Container>
            <section className="panel">
                <div className="panel-content container">
                    <div className="panel-content__details">
                        <div className="panel-content__details-name">Name : </div>
                        <div className="panel-content__details-email">Email : </div>
                        <button className="panel-content__details-password">Change Password</button>
                    </div>
                    {
                        hasItem ? '' : (
                            <div className="panel-content__list">
                                <div className="panel-content__list-title">Cart</div>
                                <div className="panel-content__list-courses">
                                    {
                                        cartItems.map((cart) => (
                                            <>
                                                <div className="panel-content__list-courses-box" key={cart.id}>
                                                    <div className="panel-content__list-courses-box__details">
                                                        <img src={cart.img} alt={cart.title} />
                                                        <span className="panel-content__list-courses-box__details-name">{cart.title}</span>
                                                    </div>
                                                    <div className="panel-content__list-courses-box__actions">
                                                        <span className='panel-content__list-courses-box__actions-price'>{cart.price}$</span>
                                                        <button className="panel-content__list-courses-box__actions-btn" onClick={() => handleDeleteItem(cart)}><FiTrash /></button>
                                                    </div>
                                                </div>
                                            </>
                                        ))
                                    }
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
                            {
                                courseItems.map((course) => (
                                    <div className="panel-content__list-courses-box" key={course.id}>
                                        <div className="panel-content__list-courses-box__name">{course.title}</div>
                                        <button className="panel-content__list-courses-box__btn">Download</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Panel;
