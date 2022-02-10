import React from 'react';
import Container from '../../Container/Container';
import './Style.scss'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../Store/reducers/authReducers'
import { useNavigate } from 'react-router-dom';


const initialValues = {
    email: '',
    password: ''
}

const validationSchema = Yup.object({
    email: Yup.string().required('مقداری وارد نشده است').email('آدرس ایمیل صحیح نیست'),
    password: Yup.string().required('مقداری وارد نشده است').min(8, 'رمز عبور کوتاه است')
})

const Login = () => {

    const history = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (values) => {
        dispatch(login(values))
        history("/panel")
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validateOnMount: true,
        validationSchema,
        enableReinitialize: true
    })

    return (
        <Container>
            <section className="form">
                <form className="form-wrap" onSubmit={formik.handleSubmit}>
                    <h3 className="form-wrap__title">Login</h3>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('email')} placeholder=" " name="email" />
                        <label htmlFor="email" className="form-wrap__box-label">Email</label>
                        {formik.errors.email && formik.touched.email && <div className='form-wrap__box-error'>{formik.errors.email}</div>}
                    </div>
                    <div className="form-wrap__box">
                        <input type="text" className="form-wrap__box-input" {...formik.getFieldProps('password')} placeholder=" " name="password" />
                        <label htmlFor="password" className="form-wrap__box-label">Password</label>
                        {formik.errors.password && formik.touched.password && <div className='form-wrap__box-error'>{formik.errors.password}</div>}
                    </div>
                    <input type="submit" className="form-wrap__button" value="Login Account" disabled={!formik.isValid} />
                </form>
            </section>
        </Container>
    );
};

export default Login;


